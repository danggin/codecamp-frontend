export const checkValidationFile = (file?: File) => {
  if (!file) {
    alert("첨부된 파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. 5MB 이하의 파일을 선택해 주세요.");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
