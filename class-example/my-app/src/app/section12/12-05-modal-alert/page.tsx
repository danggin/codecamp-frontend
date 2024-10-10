"use client";
import { Button, Modal } from "antd";

const success = () => {
  Modal.success({
    content: "게시글 등록에 성공했습니다.",
  });
};

const error = () => {
  Modal.error({
    title: "오류",
    content: "비밀번호가 일치하지 않습니다.",
  });
};

export default function ModalAlertPage() {
  return (
    <>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
    </>
  );
}
