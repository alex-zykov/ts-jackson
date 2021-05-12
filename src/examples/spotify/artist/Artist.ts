import { deserialize, JsonProperty, Serializable } from '../../../../index'
import Entity from '../../Entity'

@Serializable()
export default class Artist extends Entity {
  @JsonProperty()
  readonly id: string

  @JsonProperty()
  readonly name: string

  @JsonProperty()
  readonly href: string

  static deserialize(artistJson: Record<string, unknown>): Artist {
    return deserialize(artistJson, Artist)
  }
}
