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

var MdShopTwo = function (_React$Component) {
    _inherits(MdShopTwo, _React$Component);

    function MdShopTwo() {
        _classCallCheck(this, MdShopTwo);

        return _possibleConstructorReturn(this, (MdShopTwo.__proto__ || Object.getPrototypeOf(MdShopTwo)).apply(this, arguments));
    }

    _createClass(MdShopTwo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 25l9.1-6.6-9.1-5v11.6z m0-20v3.4h6.6v-3.4h-6.6z m10 3.4h8.4v18.2c0 1.9-1.5 3.4-3.4 3.4h-23.4c-1.8 0-3.2-1.5-3.2-3.4v-18.2h8.2v-3.4c0-1.9 1.5-3.4 3.4-3.4h6.6c1.9 0 3.4 1.5 3.4 3.4v3.4z m-25 6.6v18.4h26.6c0 1.8-1.4 3.2-3.2 3.2h-23.4c-1.9 0-3.4-1.4-3.4-3.2v-18.4h3.4z' })
                )
            );
        }
    }]);

    return MdShopTwo;
}(React.Component);

exports.default = MdShopTwo;
module.exports = exports['default'];