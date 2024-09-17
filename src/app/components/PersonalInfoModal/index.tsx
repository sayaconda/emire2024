import PlusIcon from '../Icon/Plus';

type Props = {
  setIsOpenPersonalInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PersonalInfoModal = ({
  setIsOpenPersonalInfoModal,
}: Props): JSX.Element => {
  return (
    <>
      <div className="modal">
        <div className="flex justify-end w-full mb-4 md:mb-0">
          <button
            className="rotate-45 scale-150"
            onClick={() => setIsOpenPersonalInfoModal(false)}
          >
            <PlusIcon />
          </button>
        </div>
        <div>
          <p className="text-2xl font-bold mb-6">個人情報取扱について</p>
          <p className="mb-4">
            当サロンはお客様の大切な個人情報等の取扱いに関して、以下の通りお約束致します。
          </p>
          <p className="text-1xl font-bold mb-6 text-center">記 </p>
          <ol className="list-decimal text-left">
            <li className="mb-6">
              <p>個人情報の利用目的について</p>
              お客様からご提示いただいたお名前・ご住所・電話番号・性別・その他のお客様個人に関わる情報を外部流出等お客さまの承諾なく、他の目的には利用致しません。
            </li>
            <li className="mb-6">
              <p>個人情報の籍三者提供について</p>
              当サロンでお預かりした個人情報等を・以下のいずれかに該当する場合を除き、第三者へ提供・取扱いの委託をすることはありません。
              <p>①お客さまに事前の承諾を得た場合</p>
              <p>②法令の定めにより提供を求められた場合</p>
            </li>
            <li className="mb-6">
              <p>個人情報の開示について</p>
              当サロンでは、個人情報等の開示・変更・削除の求めがあった場合には、お客様ご本人である事を確認させていただ
              いた上で、速やかにご対応いたします。
            </li>
          </ol>
          <p className="text-right">以上</p>
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
};

export default PersonalInfoModal;
