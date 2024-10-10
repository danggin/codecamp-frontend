"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomAddressPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        모달 열기
      </Button>
      {/* 
        <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
          글 내용 입력 : <input type="text" />
        </Modal>
       */}

      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
