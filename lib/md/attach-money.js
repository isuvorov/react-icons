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

var MdAttachMoney = function (_React$Component) {
    _inherits(MdAttachMoney, _React$Component);

    function MdAttachMoney() {
        _classCallCheck(this, MdAttachMoney);

        return _possibleConstructorReturn(this, (MdAttachMoney.__proto__ || Object.getPrototypeOf(MdAttachMoney)).apply(this, arguments));
    }

    _createClass(MdAttachMoney, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.7 18.2c3.7 1 7.8 2.5 7.8 7.3 0 3.4-2.6 5.3-5.9 5.9v3.6h-5v-3.6c-3.2-0.7-5.8-2.7-6-6.4h3.6c0.2 2 1.5 3.5 4.9 3.5 3.7 0 4.6-1.8 4.6-3 0-1.5-0.9-3-5-4-4.7-1.1-7.8-3.1-7.8-6.9 0-3.2 2.5-5.3 5.7-6v-3.6h5v3.7c3.6 0.8 5.4 3.4 5.4 6.3h-3.6c-0.1-2.1-1.3-3.5-4.3-3.5-2.8 0-4.4 1.3-4.4 3.1 0 1.6 1.2 2.6 5 3.6z' })
                )
            );
        }
    }]);

    return MdAttachMoney;
}(React.Component);

exports.default = MdAttachMoney;
module.exports = exports['default'];