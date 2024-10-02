<template>
  <section id="contacts" class="contacts renlincode-section">
    <div class="contacts__content main-content-wrapper">
      <h2 class="contacts__title renlincode-title section-title">{{ $t('contacts_section.title') }}</h2>
      <div class="contacts__wrapper">
        <div class="contacts__info">
          <p>{{ $t('contacts_section.description') }}</p>
        </div>
        <div class="contacts__contacts">
          <a class="contacts__contacts-tel opacity" href="tel:+16452146877" target="_blank">+1 (645) 214 6877</a>
          <ul class="contacts__contacts-list">
            <li class="contacts__contacts-item" v-for="contact in contacts">
              <a :href="contact.link" target="_blank">
                <contactIcon :name="contact.name" color="#0F1B1F" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import contactIcon from "../Icons/contactIcon.vue";
import contacts from "/public/data/contacts";
</script>

<style scoped lang="scss">
.contacts {
  width: 100%;
  background: $black-color;
  padding-bottom: 40rem;
  @media only screen and (max-width: 650px) {
    padding-bottom: 10rem;
  }
  &__title {
    color: $white-color;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18rem;
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      gap: 16rem;
    }
  }

  &__info {
    display: grid;
    place-content: center;
    padding: 90rem 0;
    background: $yellow-color;
    border-radius: 28rem;
    @media only screen and (max-width: 650px) {
      padding: 20rem 12rem;
      border-radius: 12rem;
    }
    p {
      text-align: center;
      width: 686rem;
      color: $very-black-color;
      @media only screen and (max-width: 650px) {
        font-size: 14rem;
        line-height: 20rem;
        width: 100%;
      }
    }
  }
  &__contacts {
    background: $main-color;
    border-radius: 28rem;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 12rem;
    @media only screen and (max-width: 650px) {
      padding: 22rem 12rem;
      border-radius: 12rem;
    }
    &-tel {
      color: $very-black-color;
      font-size: 27rem;
      font-weight: 600;
      @media only screen and (max-width: 650px) {
        font-size: 20rem;
      }
    }
    &-list {
      display: flex;
      align-items: center;
      gap: 16rem;

      @media only screen and (max-width: 650px) {
        gap: 12rem;
      }
    }

    &-item {
      width: 45rem;

      @media only screen and (max-width: 650px) {
        width: 40rem;
      }
    }
  }
}
</style>
