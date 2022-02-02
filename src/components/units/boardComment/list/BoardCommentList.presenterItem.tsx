import * as A from "./BoardCommentList.styles";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { Avatar, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { displayedAt } from "../../../../commons/libraries/utils";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  async function onClickDelete() {
    const passwordForD = prompt("비밀번호를 입력하세요.");

    try {
      await deleteBoardComment({
        variables: {
          password: passwordForD,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <A.Wrapper>
          <A.CommentView>
            <A.CommentProfilePhoto>
              <Avatar size="large" icon={<UserOutlined />} />
            </A.CommentProfilePhoto>
            <A.CommentViewDetails>
              <A.CommentViewTop>
                <A.CommentWriter>{props.el?.writer}</A.CommentWriter>
                <A.CommentViewRating>
                  <Rate
                    disabled
                    value={props.el?.rating}
                    style={{ fontSize: 15 }}
                  />
                </A.CommentViewRating>
              </A.CommentViewTop>
              <A.CommentViewText>{props.el?.contents}</A.CommentViewText>
              <A.CommentViewDate>
                {displayedAt(props.el?.createdAt)}
              </A.CommentViewDate>
            </A.CommentViewDetails>
            <A.CommentEandD>
              <A.CommentEdit onClick={onClickUpdate}>
                <FontAwesomeIcon icon={faEdit} color="#eeeeee" />
              </A.CommentEdit>
              <A.CommentDelete onClick={onClickDelete}>
                <FontAwesomeIcon icon={faTrashAlt} color="#eeeeee" />
              </A.CommentDelete>
            </A.CommentEandD>
          </A.CommentView>
        </A.Wrapper>
      )}

      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
