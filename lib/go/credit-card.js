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

var GoCreditCard = function (_React$Component) {
    _inherits(GoCreditCard, _React$Component);

    function GoCreditCard() {
        _classCallCheck(this, GoCreditCard);

        return _possibleConstructorReturn(this, (GoCreditCard.__proto__ || Object.getPrototypeOf(GoCreditCard)).apply(this, arguments));
    }

    _createClass(GoCreditCard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 27.5h5v-2.5h-5v2.5z m7.5 0h5v-2.5h-5v2.5z m2.5-7.5h-10v2.5h10v-2.5z m-5-2.5h2.5l5-5h-2.5l-5 5z m7.5 5h7.5v-2.5h-7.5v2.5z m20-15h-35s-2.5 1.3-2.5 2.5v20s1.3 2.5 2.5 2.5h35s2.5-1.2 2.5-2.5v-20s-1.2-2.5-2.5-2.5z m0 10v11.3s0 1.2-1.2 1.2h-32.5c-1.3 0-1.3-1.2-1.3-1.2v-11.3h2.5l5-5h-7.5v-1.2s0-1.3 1.3-1.3h32.5c1.2 0 1.2 1.3 1.2 1.3v1.2h-15l-5 5h20z' })
                )
            );
        }
    }]);

    return GoCreditCard;
}(React.Component);

exports.default = GoCreditCard;
module.exports = exports['default'];