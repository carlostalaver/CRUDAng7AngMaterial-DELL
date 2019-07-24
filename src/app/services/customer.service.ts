import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICustomer } from '../models/custumer.interface';

export interface ICustomerID extends ICustomer {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerCollection: AngularFirestoreCollection<ICustomerID>;
  customers: Observable<ICustomerID[]>;

  constructor(private readonly afs: AngularFirestore) { /* afs: angular firestore */
    this.customerCollection = this.afs.collection<ICustomerID>('customers'); /* 'customers' es el nombre de la collection en fireBase */
    this.customers = this.customerCollection.snapshotChanges().pipe(
      map(res => {
       return  res.map(a => {
          const data = a.payload.doc.data() as ICustomerID;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getAllCustomer() {
  return this.customers;
  }

  editCustomer(customer: ICustomerID) {
    return this.customerCollection.doc(customer.id).update(customer);
  }

  deleteCustomer(customerId: string) {
    return this.customerCollection.doc(customerId).delete();
  }


}
