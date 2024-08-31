
import PlusIcon from '../Icon/Plus';

type Props = {
  setIsOpenLegalModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LegalModal = ({ setIsOpenLegalModal }: Props): JSX.Element => {
  return (
    <>
      <div className="modal">
        <div className="flex justify-end w-full">
          <button
            className="rotate-45 scale-150"
            onClick={() => setIsOpenLegalModal(false)}
          >
            <PlusIcon />
          </button>
        </div>
        <div>
          <dl>
            <div>
              <dt>販売業社の名称</dt>
              <dd>ドライヘドスパemire</dd>
            </div>
            <div>
              <dt>運営統括責任者</dt>
              <dd>手洗理沙</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>
                150-0011
                <br />
                東京都渋谷区東3-12-12
              </dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd>080-4007-4656</dd>
            </div>
            <div>
              <dt>メールアドレス</dt>
              <dd>dhs.emire.2024@gmail.com</dd>
            </div>
            <div>
              <dt>販売URL</dt>
              <dd>https://stekina.com/profile/GUZQ-PFVS?stype=lp</dd>
            </div>
            <div>
              <dt>お支払い方法</dt>
              <dd>
                カード決済
                <br />
                現金
              </dd>
            </div>
            <div>
              <dt>
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
            <div>
              <dt>代金の支払い時期</dt>
              <dd>予約日の３日前までとする</dd>
            </div>
            <div>
              <dt>販売価格</dt>
              <dd>
                ¥5,500
                <br />
                各商品ページに記載の金額
              </dd>
            </div>
            <div>
              <dt>
                返品に関わる条件
                <br />
                (キャンセルポリシー)
              </dt>
              <dd>
                予約日の3日前以降は、キャンセル料として¥3,000を頂戴し、費用については返金ではなく、日程変更をお願いしております。当日キャンセルと無断キャンセルの場合は100%キャンセル料を頂戴することご了承ください。回数券をご購入の方は、当日キャンセル・無断キャンセルは、1回分の消化とし、いかなる理由でも有効期限の延長や返金手続きは致し兼ねます。
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
