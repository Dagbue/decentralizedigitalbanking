<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">Resources</p>
      <hr class="new1">
    </div>

    <div class="section-2">

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/iconography/icon-online-banking.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">DDB Online Banking</p>
          <p class="section-2-content-text-2">
            Start managing your money like a pro. Make transfers, pay bills, manager your accounts, and more.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/iconography/icon-mobile-banking.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">DDB Mobile Banking</p>
          <p class="section-2-content-text-2" >
            From the DDB Mobile Banking app to voice banking options. Learn how to access your accounts on the go.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/iconography/icon-mobile-wallet.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">Mobile Wallets</p>
          <p class="section-2-content-text-2" >
            Save time with contactless payments and better protect yourself against fraud and identity theft
            . Add your DDB cards today.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/iconography/icon-dcu-visa-debit-card.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">DDB Visa® Debit Card</p>
          <p class="section-2-content-text-2">
            Use it at the store, the ATM, and to pay bills. Also available to use with Apple Pay®, Google Pay™,
            and Samsung Pay.
          </p>
        </div>
      </div>

    </div>

    <p class="last">*Apple and Apple Pay are trademarks of Apple Inc., registered in the U.S. and other countries. Google and
      Google Pay are trademarks of Google Inc. Samsung, and Samsung Pay are registered trademarks of
      Samsung Electronics Co., Ltd.</p>

  </div>
</template>

<script>
export default {
  name: "CheckingSection2"
}
</script>

<style scoped>
.alpha{
  background-color: #f8f8f8;
  padding-top: 3%;
  padding-bottom: 4%;
}

.section-1{
  padding-left: 50px;
}

.text-1{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  color: #222222;
}

hr.new1 {
  border: solid 0.0725rem #04aa84;
  margin-top: 10px;
  margin-bottom: 10px;
  color: inherit;
  width: 5%;
}

.text-2{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: #222222;
}

.section-2{
  display: flex;
  /*margin-right: 3%;*/
  /*margin-left: 5%;*/
  margin-top: 4%;
  margin-bottom: 4%;
}
.section-2-content{
  display: block;
  /*justify-content: space-between;*/
  /*align-content: center;*/
  /*align-items: center;*/
  width: 30%;
}

.section-2-content-text-1{
  font-weight: 600;
  color: #068765;
  font-size: 22px;
  margin-bottom: 1%;
  margin-top: 3%;
  text-align: center;
}

.section-2-content-text-2{
  margin: 0;
  font-size: 17px;
  /*color: #818a91;*/
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.38;
  padding-top: 1.5%;
  text-align: center;
}

.section-2-content-image{
  height: 100px;
  width: 100px;
  object-fit: cover;
  /*margin-right: 5px;*/
  /*margin-left: 5px;*/
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.last{
  padding-left: 3%;
  width: 85%;
  color: #222222;
}


@media (max-width: 1000px) {
  .section-2-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-2-content-text-1{
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .section-2{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-2-content{
    margin-bottom: 4%;
    width: 100%;
  }

  .section-2-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-2-content-text-1{
    font-size: 18px;
  }

  .last{
    padding-left: unset;
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-top: 2%;
    padding-bottom: 2%;
  }

}

</style>