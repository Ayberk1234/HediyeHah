const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Hediye`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(":white_small_square: | <a:almas:591316540570468352> | ?kullanıcı : Kullanıcı Komutları","Kullanıcı Komutları")
      .setDescription('')
      .addField(":white_small_square: | <a:elmas:591304391357759492> | ?yetkili : Yetkili Komutları","Yetkili Komutları")
      .setDescription('')
      .addField(":white_small_square: | <a:67:589870329459900447> | ?eğlence : Eğlence Komutları","Eğlence Komutları")
      .setDescription('')
      .addField(":white_small_square: | <a:d_:589870311969652778> | ?çerçeve : Çerçeve Komutları","Çerçeve Komutları")
      .setDescription('')
      .addField(":white_small_square: | <a:c_:589870315119575190> | ?geliştirici : Geliştirici Komutları","Geliştirici Komutları")
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };

//Mabel'a Aittir
//Hediye Bot!
