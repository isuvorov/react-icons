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

var MdRedeem = function (_React$Component) {
    _inherits(MdRedeem, _React$Component);

    function MdRedeem() {
        _classCallCheck(this, MdRedeem);

        return _possibleConstructorReturn(this, (MdRedeem.__proto__ || Object.getPrototypeOf(MdRedeem)).apply(this, arguments));
    }

    _createClass(MdRedeem, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 23.4v-10h-8.6l3.6 4.6-2.8 2c-1.9-2.5-3.7-5.1-5.6-7.7-1.8 2.6-3.7 5.2-5.6 7.7l-2.8-1.9 3.6-4.7h-8.6v10h26.8z m0 8.2v-3.2h-26.8v3.2h26.8z m-18.4-25c-0.9 0-1.6 0.8-1.6 1.8s0.7 1.6 1.6 1.6 1.6-0.7 1.6-1.6-0.7-1.8-1.6-1.8z m10 0c-0.9 0-1.6 0.8-1.6 1.8s0.7 1.6 1.6 1.6 1.6-0.7 1.6-1.6-0.7-1.8-1.6-1.8z m8.4 3.4c1.8 0 3.2 1.5 3.2 3.4v18.2c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-18.2c0-1.9 1.4-3.4 3.2-3.4h3.7c-0.1-0.5-0.3-1.1-0.3-1.6 0-2.8 2.3-5 5-5 1.7 0 3.2 0.8 4.1 2.1l0.9 1.2 0.9-1.2c0.9-1.3 2.4-2.1 4.1-2.1 2.7 0 5 2.2 5 5 0 0.5-0.2 1.1-0.3 1.6h3.7z' })
                )
            );
        }
    }]);

    return MdRedeem;
}(React.Component);

exports.default = MdRedeem;
module.exports = exports['default'];