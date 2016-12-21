'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiSelectOff = function (_React$Component) {
    _inherits(MdiSelectOff, _React$Component);

    function MdiSelectOff() {
        _classCallCheck(this, MdiSelectOff);

        return _possibleConstructorReturn(this, (MdiSelectOff.__proto__ || Object.getPrototypeOf(MdiSelectOff)).apply(this, arguments));
    }

    _createClass(MdiSelectOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1,4.26848L 2.27711,3L 21,21.7229L 19.7315,23L 17,20.2685L 17,21L 15,21L 15,19L 15.7315,19L 5,8.26848L 5,9.00002L 2.99999,9.00002L 2.99999,7.00002L 3.73154,7.00002L 1,4.26848 Z M 20,3.00002C 20.5523,3.00002 21,3.44773 21,4.00002L 21,5.00001L 19,5.00001L 19,3.00002L 20,3.00002 Z M 15,5.00001L 15,3.00002L 17,3.00002L 17,5.00001L 15,5.00001 Z M 11,5.00001L 11,3.00002L 13,3.00002L 13,5.00001L 11,5.00001 Z M 6.99999,5.00001L 6.99999,3.00002L 9,3.00002L 9,5.00001L 6.99999,5.00001 Z M 11,21L 11,19L 13,19L 13,21L 11,21 Z M 6.99999,21L 6.99999,19L 9,19L 9,21L 6.99999,21 Z M 3.99999,21C 3.44771,21 2.99999,20.5523 2.99999,20L 2.99999,19L 5,19L 5,21L 3.99999,21 Z M 2.99999,15L 5,15L 5,17L 2.99999,17L 2.99999,15 Z M 21,15L 21,17L 19,17L 19,15L 21,15 Z M 2.99999,11L 5,11L 5,13L 2.99999,13L 2.99999,11 Z M 21,11L 21,13L 19,13L 19,11L 21,11 Z M 21,7.00002L 21,9.00002L 19,9.00002L 19,7.00002L 21,7.00002 Z ' })
                )
            );
        }
    }]);

    return MdiSelectOff;
}(React.Component);

exports.default = MdiSelectOff;
module.exports = exports['default'];