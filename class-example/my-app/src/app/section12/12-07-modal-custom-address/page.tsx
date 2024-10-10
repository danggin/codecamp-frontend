"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomAddressPage() {
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

  const handleComplete = (data) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달 열기
      </Button>
      {/* 
        <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
          글 내용 입력 : <input type="text" />
        </Modal>
       */}

      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
