import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import NativeSelect from "@modules/common/components/native-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()

  return (
    <div className="grid grid-cols-[80px_1fr] md:gap-x-4">
      <div className="w-[80px]">
        <Thumbnail thumbnail={item.thumbnail} size="full" />
      </div>
      <div className="flex flex-col text-base-regular gap-y-8">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-semibold md:text-base text-primary">{item.title}</span>
            <LineItemOptions variant={item.variant} />
          </div>
          <NativeSelect
            value={item.quantity}
            onChange={(value) =>
              updateItem({
                lineId: item.id,
                quantity: parseInt(value.target.value),
              })
            }
            className="max-h-[35px] w-[65px]"
          >
            {Array.from(
              [
                ...Array(
                  item.variant.inventory_quantity > 0
                    ? item.variant.inventory_quantity
                    : 10
                ),
              ].keys()
            )
              .slice(0, 10)
              .map((i) => {
                const value = i + 1
                return (
                  <option value={value} key={i}>
                    {value}
                  </option>
                )
              })}
          </NativeSelect>
        </div>
        <div className="flex items-end justify-between flex-1 text-small-regular">
          <div>
            <button
              className="flex items-center text-gray-500 gap-x-1"
              onClick={() => deleteItem(item.id)}
            >
              <Trash size={14} />
              <span>Remove</span>
            </button>
          </div>
          <div>
            <LineItemPrice item={item} region={region} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
