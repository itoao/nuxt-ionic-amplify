/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  name: NameInput,
  mailAddress: string,
  contractPlanId?: string | null,
  couponId?: string | null,
  couponValidUntil?: string | null,
  corporateInfo?: CorporateInfoInput | null,
  displaySetting?: DisplaySettingInput | null,
  role?: AccountRole | null,
  avatarId?: string | null,
  usageStatus: UsageStatus,
  isDisabled: boolean,
  isDeleted: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
  disabledAt?: string | null,
  deletedAt?: string | null,
};

export type NameInput = {
  displayName?: I18nStringInput | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type I18nStringInput = {
  ja?: string | null,
  en?: string | null,
};

export type CorporateInfoInput = {
  companyName: string,
  companyNameI18n?: I18nStringInput | null,
  amountCapital?: number | null,
  amountCapitalCurrency?: CurrencyUnit | null,
  representativeName?: string | null,
  businessDescription?: I18nStringInput | null,
  businessScale?: I18nStringInput | null,
  foundingDate?: string | null,
  avatarId?: string | null,
  termEnd?: number | null,
  location?: string | null,
};

export enum CurrencyUnit {
  JPY = "JPY",
  USD = "USD",
}


export type DisplaySettingInput = {
  colorMode?: ColorMode | null,
  timeZone?: string | null,
  lang?: Lang | null,
};

export enum ColorMode {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SYNC_WITH_OS = "SYNC_WITH_OS",
}


export enum Lang {
  JA = "JA",
  EN = "EN",
}


export enum AccountRole {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}


export enum UsageStatus {
  WALKTHROUGH_COMPLETED = "WALKTHROUGH_COMPLETED",
  INITIAL = "INITIAL",
  PROJECT_COMPLETED = "PROJECT_COMPLETED",
}


export type ModelAccountConditionInput = {
  mailAddress?: ModelStringInput | null,
  contractPlanId?: ModelIDInput | null,
  couponId?: ModelIDInput | null,
  couponValidUntil?: ModelStringInput | null,
  role?: ModelAccountRoleInput | null,
  avatarId?: ModelIDInput | null,
  usageStatus?: ModelUsageStatusInput | null,
  isDisabled?: ModelBooleanInput | null,
  isDeleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  disabledAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAccountRoleInput = {
  eq?: AccountRole | null,
  ne?: AccountRole | null,
};

export type ModelUsageStatusInput = {
  eq?: UsageStatus | null,
  ne?: UsageStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  name: Name,
  mailAddress: string,
  contractPlanId?: string | null,
  couponId?: string | null,
  couponValidUntil?: string | null,
  corporateInfo?: CorporateInfo | null,
  displaySetting?: DisplaySetting | null,
  role?: AccountRole | null,
  avatarId?: string | null,
  usageStatus: UsageStatus,
  isDisabled: boolean,
  isDeleted: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
  disabledAt?: string | null,
  deletedAt?: string | null,
  owner?: string | null,
};

export type Name = {
  __typename: "Name",
  displayName?: I18nString | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type I18nString = {
  __typename: "I18nString",
  ja?: string | null,
  en?: string | null,
};

export type CorporateInfo = {
  __typename: "CorporateInfo",
  companyName: string,
  companyNameI18n?: I18nString | null,
  amountCapital?: number | null,
  amountCapitalCurrency?: CurrencyUnit | null,
  representativeName?: string | null,
  businessDescription?: I18nString | null,
  businessScale?: I18nString | null,
  foundingDate?: string | null,
  avatarId?: string | null,
  termEnd?: number | null,
  location?: string | null,
};

export type DisplaySetting = {
  __typename: "DisplaySetting",
  colorMode?: ColorMode | null,
  timeZone?: string | null,
  lang?: Lang | null,
};

export type UpdateAccountInput = {
  id: string,
  name?: NameInput | null,
  mailAddress?: string | null,
  contractPlanId?: string | null,
  couponId?: string | null,
  couponValidUntil?: string | null,
  corporateInfo?: CorporateInfoInput | null,
  displaySetting?: DisplaySettingInput | null,
  role?: AccountRole | null,
  avatarId?: string | null,
  usageStatus?: UsageStatus | null,
  isDisabled?: boolean | null,
  isDeleted?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  disabledAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateAccountPaymentInfoInput = {
  accountId: string,
  stripeCurrency?: CurrencyUnit | null,
  stripeSubscriptionId?: string | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId?: string | null,
};

export type ModelAccountPaymentInfoConditionInput = {
  stripeCurrency?: ModelCurrencyUnitInput | null,
  stripeSubscriptionId?: ModelStringInput | null,
  stripePriceId?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripePaymentMethodId?: ModelStringInput | null,
  and?: Array< ModelAccountPaymentInfoConditionInput | null > | null,
  or?: Array< ModelAccountPaymentInfoConditionInput | null > | null,
  not?: ModelAccountPaymentInfoConditionInput | null,
};

export type ModelCurrencyUnitInput = {
  eq?: CurrencyUnit | null,
  ne?: CurrencyUnit | null,
};

export type AccountPaymentInfo = {
  __typename: "AccountPaymentInfo",
  accountId: string,
  stripeCurrency?: CurrencyUnit | null,
  stripeSubscriptionId?: string | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAccountPaymentInfoInput = {
  accountId: string,
  stripeCurrency?: CurrencyUnit | null,
  stripeSubscriptionId?: string | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId?: string | null,
};

export type DeleteAccountPaymentInfoInput = {
  accountId: string,
};

export type CreateAccountSubscriptionHistoryInput = {
  stripeSubscriptionId: string,
  accountId: string,
  valid: boolean,
  stripePriceId: string,
  stripeCustomerId: string,
  stripePaymentMethodId: string,
};

export type ModelAccountSubscriptionHistoryConditionInput = {
  accountId?: ModelIDInput | null,
  valid?: ModelBooleanInput | null,
  stripePriceId?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripePaymentMethodId?: ModelStringInput | null,
  and?: Array< ModelAccountSubscriptionHistoryConditionInput | null > | null,
  or?: Array< ModelAccountSubscriptionHistoryConditionInput | null > | null,
  not?: ModelAccountSubscriptionHistoryConditionInput | null,
};

export type AccountSubscriptionHistory = {
  __typename: "AccountSubscriptionHistory",
  stripeSubscriptionId: string,
  accountId: string,
  valid: boolean,
  stripePriceId: string,
  stripeCustomerId: string,
  stripePaymentMethodId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAccountSubscriptionHistoryInput = {
  stripeSubscriptionId: string,
  accountId?: string | null,
  valid?: boolean | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId?: string | null,
};

export type DeleteAccountSubscriptionHistoryInput = {
  stripeSubscriptionId: string,
};

export type CreateActionHistoryInput = {
  id?: string | null,
  accountId: string,
  actionType: ActionType,
  message?: I18nStringInput | null,
  actionBody?: string | null,
  createdAt?: string | null,
};

export enum ActionType {
  BUY_PUBLIC_PROJECT = "BUY_PUBLIC_PROJECT",
  CREATE_USER = "CREATE_USER",
  CHANGE_PAID_PLAN = "CHANGE_PAID_PLAN",
  CHANGE_FREE_PLAN = "CHANGE_FREE_PLAN",
  INVALID_CREDIT_CARD_DETECTION = "INVALID_CREDIT_CARD_DETECTION",
  CANCELED_USER = "CANCELED_USER",
  PASSWORD_RESET_BY_ADMIN = "PASSWORD_RESET_BY_ADMIN",
  PROMOTED_TO_ADMIN_BY_ADMIN = "PROMOTED_TO_ADMIN_BY_ADMIN",
}


export type ModelActionHistoryConditionInput = {
  accountId?: ModelIDInput | null,
  actionType?: ModelActionTypeInput | null,
  actionBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelActionHistoryConditionInput | null > | null,
  or?: Array< ModelActionHistoryConditionInput | null > | null,
  not?: ModelActionHistoryConditionInput | null,
};

export type ModelActionTypeInput = {
  eq?: ActionType | null,
  ne?: ActionType | null,
};

export type ActionHistory = {
  __typename: "ActionHistory",
  id: string,
  accountId: string,
  actionType: ActionType,
  message?: I18nString | null,
  actionBody?: string | null,
  createdAt?: string | null,
  updatedAt: string,
  account?: Account | null,
  owner?: string | null,
};

export type UpdateActionHistoryInput = {
  id: string,
  accountId?: string | null,
  actionType?: ActionType | null,
  message?: I18nStringInput | null,
  actionBody?: string | null,
  createdAt?: string | null,
};

export type DeleteActionHistoryInput = {
  id: string,
};

export type CreateAvatarInput = {
  id?: string | null,
  avatarType?: AvatarType | null,
  data?: string | null,
  createdAt?: string | null,
};

export enum AvatarType {
  ACCOUNT = "ACCOUNT",
  CORPORATE = "CORPORATE",
}


export type ModelAvatarConditionInput = {
  avatarType?: ModelAvatarTypeInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAvatarConditionInput | null > | null,
  or?: Array< ModelAvatarConditionInput | null > | null,
  not?: ModelAvatarConditionInput | null,
};

export type ModelAvatarTypeInput = {
  eq?: AvatarType | null,
  ne?: AvatarType | null,
};

export type Avatar = {
  __typename: "Avatar",
  id: string,
  avatarType?: AvatarType | null,
  data?: string | null,
  createdAt?: string | null,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAvatarInput = {
  id: string,
  avatarType?: AvatarType | null,
  data?: string | null,
  createdAt?: string | null,
};

export type DeleteAvatarInput = {
  id: string,
};

export type CreateGalleryInput = {
  id?: string | null,
  currentRevisionId?: string | null,
  name?: I18nStringInput | null,
  corporateInfo?: CorporateInfoInput | null,
  genres?: Array< string | null > | null,
  coverImage?: S3ObjectInput | null,
  coverData?: CoverDataInput | null,
  salesForm?: SalesForm | null,
  price?: number | null,
  isPublished: boolean,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type CoverDataInput = {
  data?: string | null,
};

export enum SalesForm {
  PAID = "PAID",
  FREE = "FREE",
}


export type ModelGalleryConditionInput = {
  currentRevisionId?: ModelIDInput | null,
  genres?: ModelStringInput | null,
  salesForm?: ModelSalesFormInput | null,
  price?: ModelIntInput | null,
  isPublished?: ModelBooleanInput | null,
  and?: Array< ModelGalleryConditionInput | null > | null,
  or?: Array< ModelGalleryConditionInput | null > | null,
  not?: ModelGalleryConditionInput | null,
};

export type ModelSalesFormInput = {
  eq?: SalesForm | null,
  ne?: SalesForm | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Gallery = {
  __typename: "Gallery",
  id: string,
  currentRevisionId?: string | null,
  name?: I18nString | null,
  corporateInfo?: CorporateInfo | null,
  genres?: Array< string | null > | null,
  coverImage?: S3Object | null,
  coverData?: CoverData | null,
  salesForm?: SalesForm | null,
  price?: number | null,
  isPublished: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type CoverData = {
  __typename: "CoverData",
  data?: string | null,
};

export type UpdateGalleryInput = {
  id: string,
  currentRevisionId?: string | null,
  name?: I18nStringInput | null,
  corporateInfo?: CorporateInfoInput | null,
  genres?: Array< string | null > | null,
  coverImage?: S3ObjectInput | null,
  coverData?: CoverDataInput | null,
  salesForm?: SalesForm | null,
  price?: number | null,
  isPublished?: boolean | null,
};

export type DeleteGalleryInput = {
  id: string,
};

export type CreateGalleryGenreInput = {
  id?: string | null,
  slug: string,
  name: I18nStringInput,
  isPublished?: boolean | null,
  createdBy?: string | null,
  updatedBy?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelGalleryGenreConditionInput = {
  slug?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  createdBy?: ModelIDInput | null,
  updatedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGalleryGenreConditionInput | null > | null,
  or?: Array< ModelGalleryGenreConditionInput | null > | null,
  not?: ModelGalleryGenreConditionInput | null,
};

export type GalleryGenre = {
  __typename: "GalleryGenre",
  id: string,
  slug: string,
  name: I18nString,
  isPublished?: boolean | null,
  createdBy?: string | null,
  updatedBy?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateGalleryGenreInput = {
  id: string,
  slug?: string | null,
  name?: I18nStringInput | null,
  isPublished?: boolean | null,
  createdBy?: string | null,
  updatedBy?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteGalleryGenreInput = {
  id: string,
};

export type CreateGalleryRevisionInput = {
  id?: string | null,
  galleryId?: string | null,
  revision?: number | null,
  name?: I18nStringInput | null,
  projectDescription?: I18nStringInput | null,
  corporateInfo?: CorporateInfoInput | null,
  genres?: Array< string | null > | null,
  coverImage?: S3ObjectInput | null,
  coverData?: CoverDataInput | null,
  salesForm?: SalesForm | null,
  price?: number | null,
  projectData?: string | null,
  projectDataRaw?: S3ObjectInput | null,
  isPublished: boolean,
  createdBy?: string | null,
  createdAt?: string | null,
};

export type ModelGalleryRevisionConditionInput = {
  galleryId?: ModelIDInput | null,
  revision?: ModelIntInput | null,
  genres?: ModelStringInput | null,
  salesForm?: ModelSalesFormInput | null,
  price?: ModelIntInput | null,
  projectData?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  createdBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGalleryRevisionConditionInput | null > | null,
  or?: Array< ModelGalleryRevisionConditionInput | null > | null,
  not?: ModelGalleryRevisionConditionInput | null,
};

export type GalleryRevision = {
  __typename: "GalleryRevision",
  id: string,
  galleryId?: string | null,
  revision?: number | null,
  name?: I18nString | null,
  projectDescription?: I18nString | null,
  corporateInfo?: CorporateInfo | null,
  genres?: Array< string | null > | null,
  coverImage?: S3Object | null,
  coverData?: CoverData | null,
  salesForm?: SalesForm | null,
  price?: number | null,
  projectData?: string | null,
  projectDataRaw?: S3Object | null,
  isPublished: boolean,
  createdBy?: string | null,
  createdAt?: string | null,
  updatedAt: string,
  gallery?: Gallery | null,
  owner?: string | null,
};

export type UpdateGalleryRevisionInput = {
  id: string,
  galleryId?: string | null,
  revision?: number | null,
  name?: I18nStringInput | null,
  projectDescription?: I18nStringInput | null,
  corporateInfo?: CorporateInfoInput | null,
  genres?: Array< string | null > | null,
  coverImage?: S3ObjectInput | null,
  coverData?: CoverDataInput | null,
  salesForm?: SalesForm | null,
  price?: number | null,
  projectData?: string | null,
  projectDataRaw?: S3ObjectInput | null,
  isPublished?: boolean | null,
  createdBy?: string | null,
  createdAt?: string | null,
};

export type DeleteGalleryRevisionInput = {
  id: string,
};

export type CreateJobDowngradeContractPlanInput = {
  id?: string | null,
  accountId: string,
  currentContractPlanId: string,
  nextContractPlanId: string,
  switchesAt: string,
  isCanceled?: boolean | null,
  stripeSubscriptionId?: string | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId: string,
};

export type ModelJobDowngradeContractPlanConditionInput = {
  currentContractPlanId?: ModelIDInput | null,
  nextContractPlanId?: ModelIDInput | null,
  switchesAt?: ModelStringInput | null,
  isCanceled?: ModelBooleanInput | null,
  stripeSubscriptionId?: ModelStringInput | null,
  stripePriceId?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripePaymentMethodId?: ModelStringInput | null,
  and?: Array< ModelJobDowngradeContractPlanConditionInput | null > | null,
  or?: Array< ModelJobDowngradeContractPlanConditionInput | null > | null,
  not?: ModelJobDowngradeContractPlanConditionInput | null,
};

export type JobDowngradeContractPlan = {
  __typename: "JobDowngradeContractPlan",
  id: string,
  accountId: string,
  currentContractPlanId: string,
  nextContractPlanId: string,
  switchesAt: string,
  isCanceled?: boolean | null,
  stripeSubscriptionId?: string | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateJobDowngradeContractPlanInput = {
  id: string,
  accountId: string,
  currentContractPlanId?: string | null,
  nextContractPlanId?: string | null,
  switchesAt?: string | null,
  isCanceled?: boolean | null,
  stripeSubscriptionId?: string | null,
  stripePriceId?: string | null,
  stripeCustomerId?: string | null,
  stripePaymentMethodId?: string | null,
};

export type DeleteJobDowngradeContractPlanInput = {
  id: string,
  accountId: string,
};

export type CreatePaymentHistoryInput = {
  id?: string | null,
  accountId: string,
  couponDetail?: StripeCouponInput | null,
  completedAt: string,
  stripeResponseId: string,
  settlementAmount: number,
  invokedBy?: PurchaseTarget | null,
  contractPlanId?: string | null,
  galleryId?: string | null,
};

export type StripeCouponInput = {
  id?: string | null,
  amountOff?: number | null,
  currency?: CurrencyUnit | null,
  maxRedemptions?: number | null,
  name?: string | null,
  percentOff?: number | null,
  valid?: boolean | null,
};

export enum PurchaseTarget {
  CONTRACT_PLAN = "CONTRACT_PLAN",
  PUBLIC_PROJECT = "PUBLIC_PROJECT",
}


export type ModelPaymentHistoryConditionInput = {
  accountId?: ModelIDInput | null,
  completedAt?: ModelStringInput | null,
  stripeResponseId?: ModelStringInput | null,
  settlementAmount?: ModelIntInput | null,
  invokedBy?: ModelPurchaseTargetInput | null,
  contractPlanId?: ModelStringInput | null,
  galleryId?: ModelIDInput | null,
  and?: Array< ModelPaymentHistoryConditionInput | null > | null,
  or?: Array< ModelPaymentHistoryConditionInput | null > | null,
  not?: ModelPaymentHistoryConditionInput | null,
};

export type ModelPurchaseTargetInput = {
  eq?: PurchaseTarget | null,
  ne?: PurchaseTarget | null,
};

export type PaymentHistory = {
  __typename: "PaymentHistory",
  id: string,
  accountId: string,
  couponDetail?: StripeCoupon | null,
  completedAt: string,
  stripeResponseId: string,
  settlementAmount: number,
  invokedBy?: PurchaseTarget | null,
  contractPlanId?: string | null,
  galleryId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type StripeCoupon = {
  __typename: "StripeCoupon",
  id?: string | null,
  amountOff?: number | null,
  currency?: CurrencyUnit | null,
  maxRedemptions?: number | null,
  name?: string | null,
  percentOff?: number | null,
  valid?: boolean | null,
};

export type UpdatePaymentHistoryInput = {
  id: string,
  accountId?: string | null,
  couponDetail?: StripeCouponInput | null,
  completedAt?: string | null,
  stripeResponseId?: string | null,
  settlementAmount?: number | null,
  invokedBy?: PurchaseTarget | null,
  contractPlanId?: string | null,
  galleryId?: string | null,
};

export type DeletePaymentHistoryInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  projectId: string,
  accountId: string,
  name?: string | null,
  coverImage?: S3ObjectInput | null,
  galleryId?: string | null,
  projectDataRaw?: S3ObjectInput | null,
  isStarred: boolean,
  canView?: boolean | null,
  isGallery: boolean,
  isShared: boolean,
  isSealed: boolean,
  isArchived: boolean,
  isPurchased: boolean,
  owner: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  archivedAt?: string | null,
};

export type ModelProjectConditionInput = {
  projectId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  galleryId?: ModelIDInput | null,
  isStarred?: ModelBooleanInput | null,
  canView?: ModelBooleanInput | null,
  isGallery?: ModelBooleanInput | null,
  isShared?: ModelBooleanInput | null,
  isSealed?: ModelBooleanInput | null,
  isArchived?: ModelBooleanInput | null,
  isPurchased?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  archivedAt?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  projectId: string,
  accountId: string,
  name?: string | null,
  coverImage?: S3Object | null,
  galleryId?: string | null,
  projectDataRaw?: S3Object | null,
  isStarred: boolean,
  canView?: boolean | null,
  isGallery: boolean,
  isShared: boolean,
  isSealed: boolean,
  isArchived: boolean,
  isPurchased: boolean,
  owner: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  archivedAt?: string | null,
  ownerAccount?: Account | null,
  gallery?: Gallery | null,
};

export type UpdateProjectInput = {
  id: string,
  projectId?: string | null,
  accountId?: string | null,
  name?: string | null,
  coverImage?: S3ObjectInput | null,
  galleryId?: string | null,
  projectDataRaw?: S3ObjectInput | null,
  isStarred?: boolean | null,
  canView?: boolean | null,
  isGallery?: boolean | null,
  isShared?: boolean | null,
  isSealed?: boolean | null,
  isArchived?: boolean | null,
  isPurchased?: boolean | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  archivedAt?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type ModelPublicProjectSharedAccounts = {
  accountIds: Array< string >,
};

export type OutputPublicProjectSharedAccounts = {
  __typename: "OutputPublicProjectSharedAccounts",
  id: string,
  name: Name,
  mailAddress: string,
  avatarId?: string | null,
};

export type ModelPublicAccountByMail = {
  mailAddress: string,
};

export type OutputPublicAccountByMail = {
  __typename: "OutputPublicAccountByMail",
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  mailAddress?: ModelStringInput | null,
  contractPlanId?: ModelIDInput | null,
  couponId?: ModelIDInput | null,
  couponValidUntil?: ModelStringInput | null,
  role?: ModelAccountRoleInput | null,
  avatarId?: ModelIDInput | null,
  usageStatus?: ModelUsageStatusInput | null,
  isDisabled?: ModelBooleanInput | null,
  isDeleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  disabledAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items?:  Array<Account | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelAccountPaymentInfoFilterInput = {
  accountId?: ModelIDInput | null,
  stripeCurrency?: ModelCurrencyUnitInput | null,
  stripeSubscriptionId?: ModelStringInput | null,
  stripePriceId?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripePaymentMethodId?: ModelStringInput | null,
  and?: Array< ModelAccountPaymentInfoFilterInput | null > | null,
  or?: Array< ModelAccountPaymentInfoFilterInput | null > | null,
  not?: ModelAccountPaymentInfoFilterInput | null,
};

export type ModelAccountPaymentInfoConnection = {
  __typename: "ModelAccountPaymentInfoConnection",
  items?:  Array<AccountPaymentInfo | null > | null,
  nextToken?: string | null,
};

export type ModelAccountSubscriptionHistoryFilterInput = {
  stripeSubscriptionId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  valid?: ModelBooleanInput | null,
  stripePriceId?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripePaymentMethodId?: ModelStringInput | null,
  and?: Array< ModelAccountSubscriptionHistoryFilterInput | null > | null,
  or?: Array< ModelAccountSubscriptionHistoryFilterInput | null > | null,
  not?: ModelAccountSubscriptionHistoryFilterInput | null,
};

export type ModelAccountSubscriptionHistoryConnection = {
  __typename: "ModelAccountSubscriptionHistoryConnection",
  items?:  Array<AccountSubscriptionHistory | null > | null,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelActionHistoryFilterInput = {
  id?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  actionType?: ModelActionTypeInput | null,
  actionBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelActionHistoryFilterInput | null > | null,
  or?: Array< ModelActionHistoryFilterInput | null > | null,
  not?: ModelActionHistoryFilterInput | null,
};

export type ModelActionHistoryConnection = {
  __typename: "ModelActionHistoryConnection",
  items?:  Array<ActionHistory | null > | null,
  nextToken?: string | null,
};

export type ModelAvatarFilterInput = {
  id?: ModelIDInput | null,
  avatarType?: ModelAvatarTypeInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAvatarFilterInput | null > | null,
  or?: Array< ModelAvatarFilterInput | null > | null,
  not?: ModelAvatarFilterInput | null,
};

export type ModelAvatarConnection = {
  __typename: "ModelAvatarConnection",
  items?:  Array<Avatar | null > | null,
  nextToken?: string | null,
};

export type ModelGalleryFilterInput = {
  id?: ModelIDInput | null,
  currentRevisionId?: ModelIDInput | null,
  genres?: ModelStringInput | null,
  salesForm?: ModelSalesFormInput | null,
  price?: ModelIntInput | null,
  isPublished?: ModelBooleanInput | null,
  and?: Array< ModelGalleryFilterInput | null > | null,
  or?: Array< ModelGalleryFilterInput | null > | null,
  not?: ModelGalleryFilterInput | null,
};

export type ModelGalleryConnection = {
  __typename: "ModelGalleryConnection",
  items?:  Array<Gallery | null > | null,
  nextToken?: string | null,
};

export type ModelGalleryGenreFilterInput = {
  id?: ModelIDInput | null,
  slug?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  createdBy?: ModelIDInput | null,
  updatedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGalleryGenreFilterInput | null > | null,
  or?: Array< ModelGalleryGenreFilterInput | null > | null,
  not?: ModelGalleryGenreFilterInput | null,
};

export type ModelGalleryGenreConnection = {
  __typename: "ModelGalleryGenreConnection",
  items?:  Array<GalleryGenre | null > | null,
  nextToken?: string | null,
};

export type ModelGalleryRevisionFilterInput = {
  id?: ModelIDInput | null,
  galleryId?: ModelIDInput | null,
  revision?: ModelIntInput | null,
  genres?: ModelStringInput | null,
  salesForm?: ModelSalesFormInput | null,
  price?: ModelIntInput | null,
  projectData?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  createdBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGalleryRevisionFilterInput | null > | null,
  or?: Array< ModelGalleryRevisionFilterInput | null > | null,
  not?: ModelGalleryRevisionFilterInput | null,
};

export type ModelGalleryRevisionConnection = {
  __typename: "ModelGalleryRevisionConnection",
  items?:  Array<GalleryRevision | null > | null,
  nextToken?: string | null,
};

export type ModelJobDowngradeContractPlanFilterInput = {
  id?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  currentContractPlanId?: ModelIDInput | null,
  nextContractPlanId?: ModelIDInput | null,
  switchesAt?: ModelStringInput | null,
  isCanceled?: ModelBooleanInput | null,
  stripeSubscriptionId?: ModelStringInput | null,
  stripePriceId?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripePaymentMethodId?: ModelStringInput | null,
  and?: Array< ModelJobDowngradeContractPlanFilterInput | null > | null,
  or?: Array< ModelJobDowngradeContractPlanFilterInput | null > | null,
  not?: ModelJobDowngradeContractPlanFilterInput | null,
};

export type ModelJobDowngradeContractPlanConnection = {
  __typename: "ModelJobDowngradeContractPlanConnection",
  items?:  Array<JobDowngradeContractPlan | null > | null,
  nextToken?: string | null,
};

export type ModelPaymentHistoryFilterInput = {
  id?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  completedAt?: ModelStringInput | null,
  stripeResponseId?: ModelStringInput | null,
  settlementAmount?: ModelIntInput | null,
  invokedBy?: ModelPurchaseTargetInput | null,
  contractPlanId?: ModelStringInput | null,
  galleryId?: ModelIDInput | null,
  and?: Array< ModelPaymentHistoryFilterInput | null > | null,
  or?: Array< ModelPaymentHistoryFilterInput | null > | null,
  not?: ModelPaymentHistoryFilterInput | null,
};

export type ModelPaymentHistoryConnection = {
  __typename: "ModelPaymentHistoryConnection",
  items?:  Array<PaymentHistory | null > | null,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  galleryId?: ModelIDInput | null,
  isStarred?: ModelBooleanInput | null,
  canView?: ModelBooleanInput | null,
  isGallery?: ModelBooleanInput | null,
  isShared?: ModelBooleanInput | null,
  isSealed?: ModelBooleanInput | null,
  isArchived?: ModelBooleanInput | null,
  isPurchased?: ModelBooleanInput | null,
  owner?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  archivedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items?:  Array<Project | null > | null,
  nextToken?: string | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    name:  {
      __typename: "Name",
      displayName?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
    },
    mailAddress: string,
    contractPlanId?: string | null,
    couponId?: string | null,
    couponValidUntil?: string | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    displaySetting?:  {
      __typename: "DisplaySetting",
      colorMode?: ColorMode | null,
      timeZone?: string | null,
      lang?: Lang | null,
    } | null,
    role?: AccountRole | null,
    avatarId?: string | null,
    usageStatus: UsageStatus,
    isDisabled: boolean,
    isDeleted: boolean,
    createdAt?: string | null,
    updatedAt?: string | null,
    disabledAt?: string | null,
    deletedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    name:  {
      __typename: "Name",
      displayName?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
    },
    mailAddress: string,
    contractPlanId?: string | null,
    couponId?: string | null,
    couponValidUntil?: string | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    displaySetting?:  {
      __typename: "DisplaySetting",
      colorMode?: ColorMode | null,
      timeZone?: string | null,
      lang?: Lang | null,
    } | null,
    role?: AccountRole | null,
    avatarId?: string | null,
    usageStatus: UsageStatus,
    isDisabled: boolean,
    isDeleted: boolean,
    createdAt?: string | null,
    updatedAt?: string | null,
    disabledAt?: string | null,
    deletedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    name:  {
      __typename: "Name",
      displayName?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
    },
    mailAddress: string,
    contractPlanId?: string | null,
    couponId?: string | null,
    couponValidUntil?: string | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    displaySetting?:  {
      __typename: "DisplaySetting",
      colorMode?: ColorMode | null,
      timeZone?: string | null,
      lang?: Lang | null,
    } | null,
    role?: AccountRole | null,
    avatarId?: string | null,
    usageStatus: UsageStatus,
    isDisabled: boolean,
    isDeleted: boolean,
    createdAt?: string | null,
    updatedAt?: string | null,
    disabledAt?: string | null,
    deletedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateAccountPaymentInfoMutationVariables = {
  input: CreateAccountPaymentInfoInput,
  condition?: ModelAccountPaymentInfoConditionInput | null,
};

export type CreateAccountPaymentInfoMutation = {
  createAccountPaymentInfo?:  {
    __typename: "AccountPaymentInfo",
    accountId: string,
    stripeCurrency?: CurrencyUnit | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAccountPaymentInfoMutationVariables = {
  input: UpdateAccountPaymentInfoInput,
  condition?: ModelAccountPaymentInfoConditionInput | null,
};

export type UpdateAccountPaymentInfoMutation = {
  updateAccountPaymentInfo?:  {
    __typename: "AccountPaymentInfo",
    accountId: string,
    stripeCurrency?: CurrencyUnit | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAccountPaymentInfoMutationVariables = {
  input: DeleteAccountPaymentInfoInput,
  condition?: ModelAccountPaymentInfoConditionInput | null,
};

export type DeleteAccountPaymentInfoMutation = {
  deleteAccountPaymentInfo?:  {
    __typename: "AccountPaymentInfo",
    accountId: string,
    stripeCurrency?: CurrencyUnit | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAccountSubscriptionHistoryMutationVariables = {
  input: CreateAccountSubscriptionHistoryInput,
  condition?: ModelAccountSubscriptionHistoryConditionInput | null,
};

export type CreateAccountSubscriptionHistoryMutation = {
  createAccountSubscriptionHistory?:  {
    __typename: "AccountSubscriptionHistory",
    stripeSubscriptionId: string,
    accountId: string,
    valid: boolean,
    stripePriceId: string,
    stripeCustomerId: string,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAccountSubscriptionHistoryMutationVariables = {
  input: UpdateAccountSubscriptionHistoryInput,
  condition?: ModelAccountSubscriptionHistoryConditionInput | null,
};

export type UpdateAccountSubscriptionHistoryMutation = {
  updateAccountSubscriptionHistory?:  {
    __typename: "AccountSubscriptionHistory",
    stripeSubscriptionId: string,
    accountId: string,
    valid: boolean,
    stripePriceId: string,
    stripeCustomerId: string,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAccountSubscriptionHistoryMutationVariables = {
  input: DeleteAccountSubscriptionHistoryInput,
  condition?: ModelAccountSubscriptionHistoryConditionInput | null,
};

export type DeleteAccountSubscriptionHistoryMutation = {
  deleteAccountSubscriptionHistory?:  {
    __typename: "AccountSubscriptionHistory",
    stripeSubscriptionId: string,
    accountId: string,
    valid: boolean,
    stripePriceId: string,
    stripeCustomerId: string,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateActionHistoryMutationVariables = {
  input: CreateActionHistoryInput,
  condition?: ModelActionHistoryConditionInput | null,
};

export type CreateActionHistoryMutation = {
  createActionHistory?:  {
    __typename: "ActionHistory",
    id: string,
    accountId: string,
    actionType: ActionType,
    message?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    actionBody?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateActionHistoryMutationVariables = {
  input: UpdateActionHistoryInput,
  condition?: ModelActionHistoryConditionInput | null,
};

export type UpdateActionHistoryMutation = {
  updateActionHistory?:  {
    __typename: "ActionHistory",
    id: string,
    accountId: string,
    actionType: ActionType,
    message?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    actionBody?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteActionHistoryMutationVariables = {
  input: DeleteActionHistoryInput,
  condition?: ModelActionHistoryConditionInput | null,
};

export type DeleteActionHistoryMutation = {
  deleteActionHistory?:  {
    __typename: "ActionHistory",
    id: string,
    accountId: string,
    actionType: ActionType,
    message?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    actionBody?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateAvatarMutationVariables = {
  input: CreateAvatarInput,
  condition?: ModelAvatarConditionInput | null,
};

export type CreateAvatarMutation = {
  createAvatar?:  {
    __typename: "Avatar",
    id: string,
    avatarType?: AvatarType | null,
    data?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAvatarMutationVariables = {
  input: UpdateAvatarInput,
  condition?: ModelAvatarConditionInput | null,
};

export type UpdateAvatarMutation = {
  updateAvatar?:  {
    __typename: "Avatar",
    id: string,
    avatarType?: AvatarType | null,
    data?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAvatarMutationVariables = {
  input: DeleteAvatarInput,
  condition?: ModelAvatarConditionInput | null,
};

export type DeleteAvatarMutation = {
  deleteAvatar?:  {
    __typename: "Avatar",
    id: string,
    avatarType?: AvatarType | null,
    data?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGalleryMutationVariables = {
  input: CreateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type CreateGalleryMutation = {
  createGallery?:  {
    __typename: "Gallery",
    id: string,
    currentRevisionId?: string | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGalleryMutationVariables = {
  input: UpdateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type UpdateGalleryMutation = {
  updateGallery?:  {
    __typename: "Gallery",
    id: string,
    currentRevisionId?: string | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGalleryMutationVariables = {
  input: DeleteGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type DeleteGalleryMutation = {
  deleteGallery?:  {
    __typename: "Gallery",
    id: string,
    currentRevisionId?: string | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGalleryGenreMutationVariables = {
  input: CreateGalleryGenreInput,
  condition?: ModelGalleryGenreConditionInput | null,
};

export type CreateGalleryGenreMutation = {
  createGalleryGenre?:  {
    __typename: "GalleryGenre",
    id: string,
    slug: string,
    name:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    },
    isPublished?: boolean | null,
    createdBy?: string | null,
    updatedBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateGalleryGenreMutationVariables = {
  input: UpdateGalleryGenreInput,
  condition?: ModelGalleryGenreConditionInput | null,
};

export type UpdateGalleryGenreMutation = {
  updateGalleryGenre?:  {
    __typename: "GalleryGenre",
    id: string,
    slug: string,
    name:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    },
    isPublished?: boolean | null,
    createdBy?: string | null,
    updatedBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteGalleryGenreMutationVariables = {
  input: DeleteGalleryGenreInput,
  condition?: ModelGalleryGenreConditionInput | null,
};

export type DeleteGalleryGenreMutation = {
  deleteGalleryGenre?:  {
    __typename: "GalleryGenre",
    id: string,
    slug: string,
    name:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    },
    isPublished?: boolean | null,
    createdBy?: string | null,
    updatedBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateGalleryRevisionMutationVariables = {
  input: CreateGalleryRevisionInput,
  condition?: ModelGalleryRevisionConditionInput | null,
};

export type CreateGalleryRevisionMutation = {
  createGalleryRevision?:  {
    __typename: "GalleryRevision",
    id: string,
    galleryId?: string | null,
    revision?: number | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    projectDescription?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    projectData?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isPublished: boolean,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateGalleryRevisionMutationVariables = {
  input: UpdateGalleryRevisionInput,
  condition?: ModelGalleryRevisionConditionInput | null,
};

export type UpdateGalleryRevisionMutation = {
  updateGalleryRevision?:  {
    __typename: "GalleryRevision",
    id: string,
    galleryId?: string | null,
    revision?: number | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    projectDescription?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    projectData?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isPublished: boolean,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteGalleryRevisionMutationVariables = {
  input: DeleteGalleryRevisionInput,
  condition?: ModelGalleryRevisionConditionInput | null,
};

export type DeleteGalleryRevisionMutation = {
  deleteGalleryRevision?:  {
    __typename: "GalleryRevision",
    id: string,
    galleryId?: string | null,
    revision?: number | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    projectDescription?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    projectData?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isPublished: boolean,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateJobDowngradeContractPlanMutationVariables = {
  input: CreateJobDowngradeContractPlanInput,
  condition?: ModelJobDowngradeContractPlanConditionInput | null,
};

export type CreateJobDowngradeContractPlanMutation = {
  createJobDowngradeContractPlan?:  {
    __typename: "JobDowngradeContractPlan",
    id: string,
    accountId: string,
    currentContractPlanId: string,
    nextContractPlanId: string,
    switchesAt: string,
    isCanceled?: boolean | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateJobDowngradeContractPlanMutationVariables = {
  input: UpdateJobDowngradeContractPlanInput,
  condition?: ModelJobDowngradeContractPlanConditionInput | null,
};

export type UpdateJobDowngradeContractPlanMutation = {
  updateJobDowngradeContractPlan?:  {
    __typename: "JobDowngradeContractPlan",
    id: string,
    accountId: string,
    currentContractPlanId: string,
    nextContractPlanId: string,
    switchesAt: string,
    isCanceled?: boolean | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteJobDowngradeContractPlanMutationVariables = {
  input: DeleteJobDowngradeContractPlanInput,
  condition?: ModelJobDowngradeContractPlanConditionInput | null,
};

export type DeleteJobDowngradeContractPlanMutation = {
  deleteJobDowngradeContractPlan?:  {
    __typename: "JobDowngradeContractPlan",
    id: string,
    accountId: string,
    currentContractPlanId: string,
    nextContractPlanId: string,
    switchesAt: string,
    isCanceled?: boolean | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePaymentHistoryMutationVariables = {
  input: CreatePaymentHistoryInput,
  condition?: ModelPaymentHistoryConditionInput | null,
};

export type CreatePaymentHistoryMutation = {
  createPaymentHistory?:  {
    __typename: "PaymentHistory",
    id: string,
    accountId: string,
    couponDetail?:  {
      __typename: "StripeCoupon",
      id?: string | null,
      amountOff?: number | null,
      currency?: CurrencyUnit | null,
      maxRedemptions?: number | null,
      name?: string | null,
      percentOff?: number | null,
      valid?: boolean | null,
    } | null,
    completedAt: string,
    stripeResponseId: string,
    settlementAmount: number,
    invokedBy?: PurchaseTarget | null,
    contractPlanId?: string | null,
    galleryId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentHistoryMutationVariables = {
  input: UpdatePaymentHistoryInput,
  condition?: ModelPaymentHistoryConditionInput | null,
};

export type UpdatePaymentHistoryMutation = {
  updatePaymentHistory?:  {
    __typename: "PaymentHistory",
    id: string,
    accountId: string,
    couponDetail?:  {
      __typename: "StripeCoupon",
      id?: string | null,
      amountOff?: number | null,
      currency?: CurrencyUnit | null,
      maxRedemptions?: number | null,
      name?: string | null,
      percentOff?: number | null,
      valid?: boolean | null,
    } | null,
    completedAt: string,
    stripeResponseId: string,
    settlementAmount: number,
    invokedBy?: PurchaseTarget | null,
    contractPlanId?: string | null,
    galleryId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentHistoryMutationVariables = {
  input: DeletePaymentHistoryInput,
  condition?: ModelPaymentHistoryConditionInput | null,
};

export type DeletePaymentHistoryMutation = {
  deletePaymentHistory?:  {
    __typename: "PaymentHistory",
    id: string,
    accountId: string,
    couponDetail?:  {
      __typename: "StripeCoupon",
      id?: string | null,
      amountOff?: number | null,
      currency?: CurrencyUnit | null,
      maxRedemptions?: number | null,
      name?: string | null,
      percentOff?: number | null,
      valid?: boolean | null,
    } | null,
    completedAt: string,
    stripeResponseId: string,
    settlementAmount: number,
    invokedBy?: PurchaseTarget | null,
    contractPlanId?: string | null,
    galleryId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    projectId: string,
    accountId: string,
    name?: string | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    galleryId?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isStarred: boolean,
    canView?: boolean | null,
    isGallery: boolean,
    isShared: boolean,
    isSealed: boolean,
    isArchived: boolean,
    isPurchased: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    archivedAt?: string | null,
    ownerAccount?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    projectId: string,
    accountId: string,
    name?: string | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    galleryId?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isStarred: boolean,
    canView?: boolean | null,
    isGallery: boolean,
    isShared: boolean,
    isSealed: boolean,
    isArchived: boolean,
    isPurchased: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    archivedAt?: string | null,
    ownerAccount?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    projectId: string,
    accountId: string,
    name?: string | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    galleryId?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isStarred: boolean,
    canView?: boolean | null,
    isGallery: boolean,
    isShared: boolean,
    isSealed: boolean,
    isArchived: boolean,
    isPurchased: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    archivedAt?: string | null,
    ownerAccount?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type PublicProjectSharedAccountsQueryVariables = {
  input?: ModelPublicProjectSharedAccounts | null,
};

export type PublicProjectSharedAccountsQuery = {
  publicProjectSharedAccounts?:  Array< {
    __typename: "OutputPublicProjectSharedAccounts",
    id: string,
    name:  {
      __typename: "Name",
      displayName?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
    },
    mailAddress: string,
    avatarId?: string | null,
  } | null > | null,
};

export type PublicAccountByMailQueryVariables = {
  input?: ModelPublicAccountByMail | null,
};

export type PublicAccountByMailQuery = {
  publicAccountByMail?:  Array< {
    __typename: "OutputPublicAccountByMail",
    id: string,
  } | null > | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    name:  {
      __typename: "Name",
      displayName?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
    },
    mailAddress: string,
    contractPlanId?: string | null,
    couponId?: string | null,
    couponValidUntil?: string | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    displaySetting?:  {
      __typename: "DisplaySetting",
      colorMode?: ColorMode | null,
      timeZone?: string | null,
      lang?: Lang | null,
    } | null,
    role?: AccountRole | null,
    avatarId?: string | null,
    usageStatus: UsageStatus,
    isDisabled: boolean,
    isDeleted: boolean,
    createdAt?: string | null,
    updatedAt?: string | null,
    disabledAt?: string | null,
    deletedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAccountsQueryVariables = {
  id?: string | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items?:  Array< {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AccountByContractPlanIdQueryVariables = {
  contractPlanId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountByContractPlanIdQuery = {
  accountByContractPlanId?:  {
    __typename: "ModelAccountConnection",
    items?:  Array< {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AccountByCouponIdQueryVariables = {
  couponId?: string | null,
  couponValidUntil?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountByCouponIdQuery = {
  accountByCouponId?:  {
    __typename: "ModelAccountConnection",
    items?:  Array< {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AccountByMailQueryVariables = {
  mailAddress?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountByMailQuery = {
  accountByMail?:  {
    __typename: "ModelAccountConnection",
    items?:  Array< {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAccountPaymentInfoQueryVariables = {
  accountId: string,
};

export type GetAccountPaymentInfoQuery = {
  getAccountPaymentInfo?:  {
    __typename: "AccountPaymentInfo",
    accountId: string,
    stripeCurrency?: CurrencyUnit | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAccountPaymentInfosQueryVariables = {
  accountId?: string | null,
  filter?: ModelAccountPaymentInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountPaymentInfosQuery = {
  listAccountPaymentInfos?:  {
    __typename: "ModelAccountPaymentInfoConnection",
    items?:  Array< {
      __typename: "AccountPaymentInfo",
      accountId: string,
      stripeCurrency?: CurrencyUnit | null,
      stripeSubscriptionId?: string | null,
      stripePriceId?: string | null,
      stripeCustomerId?: string | null,
      stripePaymentMethodId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAccountSubscriptionHistoryQueryVariables = {
  stripeSubscriptionId: string,
};

export type GetAccountSubscriptionHistoryQuery = {
  getAccountSubscriptionHistory?:  {
    __typename: "AccountSubscriptionHistory",
    stripeSubscriptionId: string,
    accountId: string,
    valid: boolean,
    stripePriceId: string,
    stripeCustomerId: string,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAccountSubscriptionHistorysQueryVariables = {
  stripeSubscriptionId?: string | null,
  filter?: ModelAccountSubscriptionHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountSubscriptionHistorysQuery = {
  listAccountSubscriptionHistorys?:  {
    __typename: "ModelAccountSubscriptionHistoryConnection",
    items?:  Array< {
      __typename: "AccountSubscriptionHistory",
      stripeSubscriptionId: string,
      accountId: string,
      valid: boolean,
      stripePriceId: string,
      stripeCustomerId: string,
      stripePaymentMethodId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SubscriptionHistoryByAccountIdQueryVariables = {
  accountId?: string | null,
  stripeSubscriptionId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountSubscriptionHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubscriptionHistoryByAccountIdQuery = {
  subscriptionHistoryByAccountId?:  {
    __typename: "ModelAccountSubscriptionHistoryConnection",
    items?:  Array< {
      __typename: "AccountSubscriptionHistory",
      stripeSubscriptionId: string,
      accountId: string,
      valid: boolean,
      stripePriceId: string,
      stripeCustomerId: string,
      stripePaymentMethodId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetActionHistoryQueryVariables = {
  id: string,
};

export type GetActionHistoryQuery = {
  getActionHistory?:  {
    __typename: "ActionHistory",
    id: string,
    accountId: string,
    actionType: ActionType,
    message?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    actionBody?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListActionHistorysQueryVariables = {
  id?: string | null,
  filter?: ModelActionHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListActionHistorysQuery = {
  listActionHistorys?:  {
    __typename: "ModelActionHistoryConnection",
    items?:  Array< {
      __typename: "ActionHistory",
      id: string,
      accountId: string,
      actionType: ActionType,
      message?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      actionBody?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        name:  {
          __typename: "Name",
          displayName?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          firstName?: string | null,
          lastName?: string | null,
        },
        mailAddress: string,
        contractPlanId?: string | null,
        couponId?: string | null,
        couponValidUntil?: string | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        displaySetting?:  {
          __typename: "DisplaySetting",
          colorMode?: ColorMode | null,
          timeZone?: string | null,
          lang?: Lang | null,
        } | null,
        role?: AccountRole | null,
        avatarId?: string | null,
        usageStatus: UsageStatus,
        isDisabled: boolean,
        isDeleted: boolean,
        createdAt?: string | null,
        updatedAt?: string | null,
        disabledAt?: string | null,
        deletedAt?: string | null,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ActionHistoryByAccountIdQueryVariables = {
  accountId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActionHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActionHistoryByAccountIdQuery = {
  actionHistoryByAccountId?:  {
    __typename: "ModelActionHistoryConnection",
    items?:  Array< {
      __typename: "ActionHistory",
      id: string,
      accountId: string,
      actionType: ActionType,
      message?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      actionBody?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        name:  {
          __typename: "Name",
          displayName?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          firstName?: string | null,
          lastName?: string | null,
        },
        mailAddress: string,
        contractPlanId?: string | null,
        couponId?: string | null,
        couponValidUntil?: string | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        displaySetting?:  {
          __typename: "DisplaySetting",
          colorMode?: ColorMode | null,
          timeZone?: string | null,
          lang?: Lang | null,
        } | null,
        role?: AccountRole | null,
        avatarId?: string | null,
        usageStatus: UsageStatus,
        isDisabled: boolean,
        isDeleted: boolean,
        createdAt?: string | null,
        updatedAt?: string | null,
        disabledAt?: string | null,
        deletedAt?: string | null,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAvatarQueryVariables = {
  id: string,
};

export type GetAvatarQuery = {
  getAvatar?:  {
    __typename: "Avatar",
    id: string,
    avatarType?: AvatarType | null,
    data?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAvatarsQueryVariables = {
  id?: string | null,
  filter?: ModelAvatarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAvatarsQuery = {
  listAvatars?:  {
    __typename: "ModelAvatarConnection",
    items?:  Array< {
      __typename: "Avatar",
      id: string,
      avatarType?: AvatarType | null,
      data?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryQueryVariables = {
  id: string,
};

export type GetGalleryQuery = {
  getGallery?:  {
    __typename: "Gallery",
    id: string,
    currentRevisionId?: string | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGallerysQueryVariables = {
  id?: string | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGallerysQuery = {
  listGallerys?:  {
    __typename: "ModelGalleryConnection",
    items?:  Array< {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GalleryByCurrentRevisionIdQueryVariables = {
  currentRevisionId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleryByCurrentRevisionIdQuery = {
  galleryByCurrentRevisionId?:  {
    __typename: "ModelGalleryConnection",
    items?:  Array< {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryGenreQueryVariables = {
  id: string,
};

export type GetGalleryGenreQuery = {
  getGalleryGenre?:  {
    __typename: "GalleryGenre",
    id: string,
    slug: string,
    name:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    },
    isPublished?: boolean | null,
    createdBy?: string | null,
    updatedBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListGalleryGenresQueryVariables = {
  id?: string | null,
  filter?: ModelGalleryGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGalleryGenresQuery = {
  listGalleryGenres?:  {
    __typename: "ModelGalleryGenreConnection",
    items?:  Array< {
      __typename: "GalleryGenre",
      id: string,
      slug: string,
      name:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      },
      isPublished?: boolean | null,
      createdBy?: string | null,
      updatedBy?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryRevisionQueryVariables = {
  id: string,
};

export type GetGalleryRevisionQuery = {
  getGalleryRevision?:  {
    __typename: "GalleryRevision",
    id: string,
    galleryId?: string | null,
    revision?: number | null,
    name?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    projectDescription?:  {
      __typename: "I18nString",
      ja?: string | null,
      en?: string | null,
    } | null,
    corporateInfo?:  {
      __typename: "CorporateInfo",
      companyName: string,
      companyNameI18n?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      amountCapital?: number | null,
      amountCapitalCurrency?: CurrencyUnit | null,
      representativeName?: string | null,
      businessDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      businessScale?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      foundingDate?: string | null,
      avatarId?: string | null,
      termEnd?: number | null,
      location?: string | null,
    } | null,
    genres?: Array< string | null > | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coverData?:  {
      __typename: "CoverData",
      data?: string | null,
    } | null,
    salesForm?: SalesForm | null,
    price?: number | null,
    projectData?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isPublished: boolean,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListGalleryRevisionsQueryVariables = {
  id?: string | null,
  filter?: ModelGalleryRevisionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGalleryRevisionsQuery = {
  listGalleryRevisions?:  {
    __typename: "ModelGalleryRevisionConnection",
    items?:  Array< {
      __typename: "GalleryRevision",
      id: string,
      galleryId?: string | null,
      revision?: number | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      projectDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      projectData?: string | null,
      projectDataRaw?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      isPublished: boolean,
      createdBy?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        currentRevisionId?: string | null,
        name?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        genres?: Array< string | null > | null,
        coverImage?:  {
          __typename: "S3Object",
          bucket: string,
          region: string,
          key: string,
        } | null,
        coverData?:  {
          __typename: "CoverData",
          data?: string | null,
        } | null,
        salesForm?: SalesForm | null,
        price?: number | null,
        isPublished: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GalleryRevisionByGalleryIdQueryVariables = {
  galleryId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGalleryRevisionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleryRevisionByGalleryIdQuery = {
  galleryRevisionByGalleryId?:  {
    __typename: "ModelGalleryRevisionConnection",
    items?:  Array< {
      __typename: "GalleryRevision",
      id: string,
      galleryId?: string | null,
      revision?: number | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      projectDescription?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      projectData?: string | null,
      projectDataRaw?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      isPublished: boolean,
      createdBy?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        currentRevisionId?: string | null,
        name?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        genres?: Array< string | null > | null,
        coverImage?:  {
          __typename: "S3Object",
          bucket: string,
          region: string,
          key: string,
        } | null,
        coverData?:  {
          __typename: "CoverData",
          data?: string | null,
        } | null,
        salesForm?: SalesForm | null,
        price?: number | null,
        isPublished: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetJobDowngradeContractPlanQueryVariables = {
  id: string,
  accountId: string,
};

export type GetJobDowngradeContractPlanQuery = {
  getJobDowngradeContractPlan?:  {
    __typename: "JobDowngradeContractPlan",
    id: string,
    accountId: string,
    currentContractPlanId: string,
    nextContractPlanId: string,
    switchesAt: string,
    isCanceled?: boolean | null,
    stripeSubscriptionId?: string | null,
    stripePriceId?: string | null,
    stripeCustomerId?: string | null,
    stripePaymentMethodId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListJobDowngradeContractPlansQueryVariables = {
  id?: string | null,
  accountId?: ModelIDKeyConditionInput | null,
  filter?: ModelJobDowngradeContractPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListJobDowngradeContractPlansQuery = {
  listJobDowngradeContractPlans?:  {
    __typename: "ModelJobDowngradeContractPlanConnection",
    items?:  Array< {
      __typename: "JobDowngradeContractPlan",
      id: string,
      accountId: string,
      currentContractPlanId: string,
      nextContractPlanId: string,
      switchesAt: string,
      isCanceled?: boolean | null,
      stripeSubscriptionId?: string | null,
      stripePriceId?: string | null,
      stripeCustomerId?: string | null,
      stripePaymentMethodId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type JobPlanByAccountIdQueryVariables = {
  accountId?: string | null,
  switchesAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelJobDowngradeContractPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type JobPlanByAccountIdQuery = {
  jobPlanByAccountId?:  {
    __typename: "ModelJobDowngradeContractPlanConnection",
    items?:  Array< {
      __typename: "JobDowngradeContractPlan",
      id: string,
      accountId: string,
      currentContractPlanId: string,
      nextContractPlanId: string,
      switchesAt: string,
      isCanceled?: boolean | null,
      stripeSubscriptionId?: string | null,
      stripePriceId?: string | null,
      stripeCustomerId?: string | null,
      stripePaymentMethodId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentHistoryQueryVariables = {
  id: string,
};

export type GetPaymentHistoryQuery = {
  getPaymentHistory?:  {
    __typename: "PaymentHistory",
    id: string,
    accountId: string,
    couponDetail?:  {
      __typename: "StripeCoupon",
      id?: string | null,
      amountOff?: number | null,
      currency?: CurrencyUnit | null,
      maxRedemptions?: number | null,
      name?: string | null,
      percentOff?: number | null,
      valid?: boolean | null,
    } | null,
    completedAt: string,
    stripeResponseId: string,
    settlementAmount: number,
    invokedBy?: PurchaseTarget | null,
    contractPlanId?: string | null,
    galleryId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentHistorysQueryVariables = {
  filter?: ModelPaymentHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentHistorysQuery = {
  listPaymentHistorys?:  {
    __typename: "ModelPaymentHistoryConnection",
    items?:  Array< {
      __typename: "PaymentHistory",
      id: string,
      accountId: string,
      couponDetail?:  {
        __typename: "StripeCoupon",
        id?: string | null,
        amountOff?: number | null,
        currency?: CurrencyUnit | null,
        maxRedemptions?: number | null,
        name?: string | null,
        percentOff?: number | null,
        valid?: boolean | null,
      } | null,
      completedAt: string,
      stripeResponseId: string,
      settlementAmount: number,
      invokedBy?: PurchaseTarget | null,
      contractPlanId?: string | null,
      galleryId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type PaymentHistoryByAccountIdQueryVariables = {
  accountId?: string | null,
  stripeResponseId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaymentHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PaymentHistoryByAccountIdQuery = {
  paymentHistoryByAccountId?:  {
    __typename: "ModelPaymentHistoryConnection",
    items?:  Array< {
      __typename: "PaymentHistory",
      id: string,
      accountId: string,
      couponDetail?:  {
        __typename: "StripeCoupon",
        id?: string | null,
        amountOff?: number | null,
        currency?: CurrencyUnit | null,
        maxRedemptions?: number | null,
        name?: string | null,
        percentOff?: number | null,
        valid?: boolean | null,
      } | null,
      completedAt: string,
      stripeResponseId: string,
      settlementAmount: number,
      invokedBy?: PurchaseTarget | null,
      contractPlanId?: string | null,
      galleryId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    projectId: string,
    accountId: string,
    name?: string | null,
    coverImage?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    galleryId?: string | null,
    projectDataRaw?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    isStarred: boolean,
    canView?: boolean | null,
    isGallery: boolean,
    isShared: boolean,
    isSealed: boolean,
    isArchived: boolean,
    isPurchased: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    archivedAt?: string | null,
    ownerAccount?:  {
      __typename: "Account",
      id: string,
      name:  {
        __typename: "Name",
        displayName?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        firstName?: string | null,
        lastName?: string | null,
      },
      mailAddress: string,
      contractPlanId?: string | null,
      couponId?: string | null,
      couponValidUntil?: string | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      displaySetting?:  {
        __typename: "DisplaySetting",
        colorMode?: ColorMode | null,
        timeZone?: string | null,
        lang?: Lang | null,
      } | null,
      role?: AccountRole | null,
      avatarId?: string | null,
      usageStatus: UsageStatus,
      isDisabled: boolean,
      isDeleted: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      disabledAt?: string | null,
      deletedAt?: string | null,
      owner?: string | null,
    } | null,
    gallery?:  {
      __typename: "Gallery",
      id: string,
      currentRevisionId?: string | null,
      name?:  {
        __typename: "I18nString",
        ja?: string | null,
        en?: string | null,
      } | null,
      corporateInfo?:  {
        __typename: "CorporateInfo",
        companyName: string,
        companyNameI18n?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        amountCapital?: number | null,
        amountCapitalCurrency?: CurrencyUnit | null,
        representativeName?: string | null,
        businessDescription?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        businessScale?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        foundingDate?: string | null,
        avatarId?: string | null,
        termEnd?: number | null,
        location?: string | null,
      } | null,
      genres?: Array< string | null > | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      coverData?:  {
        __typename: "CoverData",
        data?: string | null,
      } | null,
      salesForm?: SalesForm | null,
      price?: number | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items?:  Array< {
      __typename: "Project",
      id: string,
      projectId: string,
      accountId: string,
      name?: string | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      galleryId?: string | null,
      projectDataRaw?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      isStarred: boolean,
      canView?: boolean | null,
      isGallery: boolean,
      isShared: boolean,
      isSealed: boolean,
      isArchived: boolean,
      isPurchased: boolean,
      owner: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      archivedAt?: string | null,
      ownerAccount?:  {
        __typename: "Account",
        id: string,
        name:  {
          __typename: "Name",
          displayName?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          firstName?: string | null,
          lastName?: string | null,
        },
        mailAddress: string,
        contractPlanId?: string | null,
        couponId?: string | null,
        couponValidUntil?: string | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        displaySetting?:  {
          __typename: "DisplaySetting",
          colorMode?: ColorMode | null,
          timeZone?: string | null,
          lang?: Lang | null,
        } | null,
        role?: AccountRole | null,
        avatarId?: string | null,
        usageStatus: UsageStatus,
        isDisabled: boolean,
        isDeleted: boolean,
        createdAt?: string | null,
        updatedAt?: string | null,
        disabledAt?: string | null,
        deletedAt?: string | null,
        owner?: string | null,
      } | null,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        currentRevisionId?: string | null,
        name?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        genres?: Array< string | null > | null,
        coverImage?:  {
          __typename: "S3Object",
          bucket: string,
          region: string,
          key: string,
        } | null,
        coverData?:  {
          __typename: "CoverData",
          data?: string | null,
        } | null,
        salesForm?: SalesForm | null,
        price?: number | null,
        isPublished: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ProjectByAccountIdQueryVariables = {
  accountId?: string | null,
  projectId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectByAccountIdQuery = {
  projectByAccountId?:  {
    __typename: "ModelProjectConnection",
    items?:  Array< {
      __typename: "Project",
      id: string,
      projectId: string,
      accountId: string,
      name?: string | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      galleryId?: string | null,
      projectDataRaw?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      isStarred: boolean,
      canView?: boolean | null,
      isGallery: boolean,
      isShared: boolean,
      isSealed: boolean,
      isArchived: boolean,
      isPurchased: boolean,
      owner: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      archivedAt?: string | null,
      ownerAccount?:  {
        __typename: "Account",
        id: string,
        name:  {
          __typename: "Name",
          displayName?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          firstName?: string | null,
          lastName?: string | null,
        },
        mailAddress: string,
        contractPlanId?: string | null,
        couponId?: string | null,
        couponValidUntil?: string | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        displaySetting?:  {
          __typename: "DisplaySetting",
          colorMode?: ColorMode | null,
          timeZone?: string | null,
          lang?: Lang | null,
        } | null,
        role?: AccountRole | null,
        avatarId?: string | null,
        usageStatus: UsageStatus,
        isDisabled: boolean,
        isDeleted: boolean,
        createdAt?: string | null,
        updatedAt?: string | null,
        disabledAt?: string | null,
        deletedAt?: string | null,
        owner?: string | null,
      } | null,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        currentRevisionId?: string | null,
        name?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        genres?: Array< string | null > | null,
        coverImage?:  {
          __typename: "S3Object",
          bucket: string,
          region: string,
          key: string,
        } | null,
        coverData?:  {
          __typename: "CoverData",
          data?: string | null,
        } | null,
        salesForm?: SalesForm | null,
        price?: number | null,
        isPublished: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ProjectByProjectIdQueryVariables = {
  projectId?: string | null,
  accountId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectByProjectIdQuery = {
  projectByProjectId?:  {
    __typename: "ModelProjectConnection",
    items?:  Array< {
      __typename: "Project",
      id: string,
      projectId: string,
      accountId: string,
      name?: string | null,
      coverImage?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      galleryId?: string | null,
      projectDataRaw?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      isStarred: boolean,
      canView?: boolean | null,
      isGallery: boolean,
      isShared: boolean,
      isSealed: boolean,
      isArchived: boolean,
      isPurchased: boolean,
      owner: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      archivedAt?: string | null,
      ownerAccount?:  {
        __typename: "Account",
        id: string,
        name:  {
          __typename: "Name",
          displayName?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          firstName?: string | null,
          lastName?: string | null,
        },
        mailAddress: string,
        contractPlanId?: string | null,
        couponId?: string | null,
        couponValidUntil?: string | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        displaySetting?:  {
          __typename: "DisplaySetting",
          colorMode?: ColorMode | null,
          timeZone?: string | null,
          lang?: Lang | null,
        } | null,
        role?: AccountRole | null,
        avatarId?: string | null,
        usageStatus: UsageStatus,
        isDisabled: boolean,
        isDeleted: boolean,
        createdAt?: string | null,
        updatedAt?: string | null,
        disabledAt?: string | null,
        deletedAt?: string | null,
        owner?: string | null,
      } | null,
      gallery?:  {
        __typename: "Gallery",
        id: string,
        currentRevisionId?: string | null,
        name?:  {
          __typename: "I18nString",
          ja?: string | null,
          en?: string | null,
        } | null,
        corporateInfo?:  {
          __typename: "CorporateInfo",
          companyName: string,
          companyNameI18n?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          amountCapital?: number | null,
          amountCapitalCurrency?: CurrencyUnit | null,
          representativeName?: string | null,
          businessDescription?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          businessScale?:  {
            __typename: "I18nString",
            ja?: string | null,
            en?: string | null,
          } | null,
          foundingDate?: string | null,
          avatarId?: string | null,
          termEnd?: number | null,
          location?: string | null,
        } | null,
        genres?: Array< string | null > | null,
        coverImage?:  {
          __typename: "S3Object",
          bucket: string,
          region: string,
          key: string,
        } | null,
        coverData?:  {
          __typename: "CoverData",
          data?: string | null,
        } | null,
        salesForm?: SalesForm | null,
        price?: number | null,
        isPublished: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
