import PlusIcon from '../Icon/Plus';

type Props = {
  setIsOpenLegalModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LegalModal = ({ setIsOpenLegalModal }: Props): JSX.Element => {
  return (
    <>
      <div className="modal relative flex flex-col justify-center items-center">
        <div className="flex justify-end w-full mb-2 md:mb-0 md:absolute md:top-6 md:right-6 w-6">
          <button
            className="rotate-45 scale-150"
            onClick={() => setIsOpenLegalModal(false)}
          >
            <PlusIcon />
          </button>
        </div>
        <div className="h-full">
          <dl>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">販売業社の名称</dt>
              <dd>ドライヘドスパemire</dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">運営統括責任者</dt>
              <dd>手洗理沙</dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">所在地</dt>
              <dd>
                150-0011
                <br />
                東京都渋谷区東3-12-12
              </dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">電話番号</dt>
              <dd>
                <a href="tel:080-4007-4656">080-4007-4656</a>
              </dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">メールアドレス</dt>
              <dd>
                <a href="mailto:dhs.emire.2024@gmail.com">
                  dhs.emire.2024@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">販売URL</dt>
              <dd>
                <a
                  href="https://stekina.com/profile/GUZQ-PFVS?stype=lp"
                  target="_blank"
                >
                  https://stekina.com/profile/GUZQ-PFVS?stype=lp
                </a>
              </dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">お支払い方法</dt>
              <dd>
                カード決済
                <br />
                現金
              </dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">
                営業時間・問合せ受付時
                <br />
                休業日
              </dt>
              <dd>
                [月〜水] 20時〜22時
                <br />
                [金〜日] 11時〜20時
                <br />
                [定休日]木曜日
              </dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">代金の支払い時期</dt>
              <dd>予約日の３日前までとする</dd>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <dt className="mr-8 w-32">販売価格</dt>
              <dd>
                ¥5,500
                <br />
                各商品ページに記載の金額
              </dd>
            </div>
            <div>
              <dt className="mb-4 font-bold">
                返品に関わる条件(キャンセルポリシー)
              </dt>
              <dd>
                予約日の3日前以降は、キャンセル料として¥3,000を頂戴し、費用については返金ではなく、日程変更をお願いしております。
                <br />
                当日キャンセルと無断キャンセルの場合は100%キャンセル料を頂戴することご了承ください。
                <br />
                回数券をご購入の方は、当日キャンセル・無断キャンセルは、1回分の消化とし、いかなる理由でも有効期限の延長や返金手続きは致し兼ねます。
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
};

export default LegalModal;
