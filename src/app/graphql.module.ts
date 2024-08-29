import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { environment } from 'src/environment/environment';

const uri = 'https://perfect-mackerel-74.hasura.app/api/rest'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const headers = new HttpHeaders().set(
    'x-hasura-admin-secret',
    environment.HASURA_SERCER_KEY,
  );

  return {
    link: httpLink.create({
      uri,
      headers,
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
