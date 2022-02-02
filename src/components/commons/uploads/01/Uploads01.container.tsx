import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { useMutation } from "@apollo/client";
import { useRef, ChangeEvent } from "react";
import { checkValidationImage } from "./Uploads01.validation";

interface IPropsUploads01 {
  index: number;
  fileUrl: any;
  defaultFileUrl: string | undefined;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export default function Uploads01(props: IPropsUploads01) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
