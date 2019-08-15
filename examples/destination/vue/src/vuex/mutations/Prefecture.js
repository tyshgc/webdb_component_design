/**
 * 宛先の都道府県に関するMutation
 */
export const selectPrefectureMutation = (state, payload) => {
    if (!payload.prefecture) return;

    state.editDestination.prefecture = payload.prefecture;
}
  