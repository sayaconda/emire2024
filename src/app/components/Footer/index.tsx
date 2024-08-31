import { useState } from 'react';

import LegalModal from '../LegalModal';
import PolicyModal from '../PolicyModal';

const Footer = () => {
  const [isOpenLegalModal, setIsOpenLegalModal] = useState<boolean>(false);
  const [isOpenPolicyModal, setIsOpenPolicyModal] = useState<boolean>(false);
  const openLegalModal = () => {
    setIsOpenLegalModal(true);
  };
  const openPolicyModal = () => {
    setIsOpenPolicyModal(true);
  };

  return (
    <div className="m-8 text-center">
      <div className="flex justify-center mb-6 gap-20">
        <div>
          <p
            className="cursor-pointer hover:opacity-60"
            onClick={openLegalModal}
          >
            特定商取法に基づく表記
          </p>
          {isOpenLegalModal && <LegalModal setIsOpenLegalModal={setIsOpenLegalModal} />}
        </div>
        <div>
          <p
            className="cursor-pointer hover:opacity-60"
            onClick={openPolicyModal}
          >
            ドライヘッドスパに関する利用規約とキャンセルポリシー
          </p>
          {isOpenPolicyModal && <PolicyModal setIsOpenPolicyModal={setIsOpenPolicyModal} />}
        </div>
      </div>
      <p>&copy; emire</p>
    </div>
  );
};

export default Footer;
