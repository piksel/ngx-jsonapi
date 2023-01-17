import { Resource } from './resource';
import { IParamsResource } from './interfaces';
import { IDocumentResource } from './interfaces/data-object';
import { ClonedDocumentResource } from './cloned-document-resource';
import { cloneDeep } from 'lodash-es';
import { IClonedResource } from './interfaces/cloned-resource';

export class ClonedResource<T extends Resource> extends Resource implements IClonedResource {
    private parent: Resource;
    public attributes: T['attributes'];
    public relationships: T['relationships'];

    public constructor(resource: T) {
        super();
        // @note using cloneDeep because the parent may have changed since clone (example: data received from socket while editing clone)
        this.parent = cloneDeep(resource);
        this.type = this.parent.type; // this line should go to fill method?
        let include: Array<string> = Object.keys(this.parent.relationships);
        this.fill(this.parent.toObject({ include: include }), true);
        this.copySourceFromParent();
    }

    public toObject(params?: IParamsResource): IDocumentResource {
        return new ClonedDocumentResource(this, this.parent, params).getResourceObject();
    }

    public superToObject(params?: IParamsResource): IDocumentResource {
        return super.toObject(params);
    }

    private copySourceFromParent(): void {
        this.source = this.parent.source;
        Object.keys(this.relationships).forEach((relationship): void => {
            this.relationships[relationship].source = this.parent.relationships[relationship].source;
        });
    }
}
