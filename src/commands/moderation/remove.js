// remove a game
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remove')
    .setDescription('Remove a game from the list of available games')
    .addStringOption(option =>
      option
        .setName('game')
        .setDescription('Name of game')
        .setRequired(true)
    ),
  async execute(interaction) {
    const game = interaction.options.getString('game');
    await interaction.reply(`Game ${game} has been removed to the list of availabe games.`);
  }
}