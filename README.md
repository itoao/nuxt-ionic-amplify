
- まず、自動生成された type （214 行目の CorporateInfo など）を配列に全部ぶちこむ
  - このとき、定義元の type と判定する式は、はじめのキーに __typename かどうか
- type の内部で生成される __typename（GetProjectQuery など） が配列に格納された type  と合致していたら、置換する
- 