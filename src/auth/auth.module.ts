import {Module} from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserModule } from 'src/users/user.module';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStrategy],
  exports: []
})

export class AuthModule {}