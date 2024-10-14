"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달 열기
      </Button>
      <Modal
        title="비밀번호 입력"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력 : <input type="password" />
      </Modal>
    </>
  );
}