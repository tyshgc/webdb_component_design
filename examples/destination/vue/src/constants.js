// フィールドの見出しなど
const FIELDNAME = {
    NAME: "名前",
    FIRSTNAME: "名",
    LASTNAME: "姓",
    POSTALCODE: "郵便番号",
    ADDRESS: "住所",
    PREFECTURE: "都道府県",
    CITYSTREET: "市区町村・番地以下"
}

// 都道府県リスト
const PREFECTURES = ["北海道", "東京都", "神奈川県"];

export default {
    data: function() {
        return {
            FIELDNAME,
            PREFECTURES
        }
    }
}