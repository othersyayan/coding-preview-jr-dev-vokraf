function generateVoucher() {
  let text = "";
  let unicode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let vPrefix = "SKU";
  voucher = "";

  for (let i = 0; i < 10; i++)
    text += unicode.charAt(Math.floor(Math.random() * unicode.length));

  voucher = vPrefix + text;

  console.log(voucher);
}