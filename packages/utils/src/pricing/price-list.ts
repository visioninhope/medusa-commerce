import { isDate, isString, MedusaError } from "../common"

export enum PriceListStatus {
  ACTIVE = "active",
  DRAFT = "draft",
}

export enum PriceListType {
  SALE = "sale",
  OVERRIDE = "override",
}

export const validatePriceListDates = (priceListData: {
  starts_at?: Date | string | null
  ends_at?: Date | string | null
}) => {
  if (isString(priceListData.starts_at) && !isDate(priceListData.starts_at)) {
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      `Cannot set price list starts at with with invalid date string: ${priceListData.starts_at}`
    )
  }

  if (isString(priceListData.ends_at) && !isDate(priceListData.ends_at)) {
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      `Cannot set price list ends at with with invalid date string: ${priceListData.ends_at}`
    )
  }
}
