import { INNSInfoStore } from "../interface/nnsinfo.interface";
import { observable } from "mobx";

class NNSInfo implements INNSInfoStore{
    @observable public nnsInfo:string;
}
export default new NNSInfo();