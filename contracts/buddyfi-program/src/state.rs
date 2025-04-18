use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Profile {
    pub wallet: Pubkey,
    pub skills: Vec<String>,
    pub verified: bool,
    pub ipfs_cid: String,
}
