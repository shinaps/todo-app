


## 開発にあたってのルール

### 値のバリデーション
入力値のバリデーションはcontainersでは行わず、components側で行う。
components側でzodによるバリデーションを行い、その結果をcontainersに渡す。

## メッセージの表示
メッセージの表示はcontainersのみで制御する。


## 開発用のコマンドなど

### supabaseのスキーマを生成する
```shell
supabase gen types typescript --linked > supabase/schema.ts
```
