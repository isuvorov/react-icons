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

var TiShoppingBag = function (_React$Component) {
    _inherits(TiShoppingBag, _React$Component);

    function TiShoppingBag() {
        _classCallCheck(this, TiShoppingBag);

        return _possibleConstructorReturn(this, (TiShoppingBag.__proto__ || Object.getPrototypeOf(TiShoppingBag)).apply(this, arguments));
    }

    _createClass(TiShoppingBag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 6.7h-16.6c-2.8 0-5 2.2-5 5v18.3c0 2.8 2.2 5 5 5h16.6c2.8 0 5-2.2 5-5v-18.3c0-2.8-2.2-5-5-5z m1.7 23.3c0 0.9-0.7 1.7-1.7 1.7h-16.6c-1 0-1.7-0.8-1.7-1.7v-12.1c0.5 0.3 1.1 0.4 1.7 0.4h2.5c0 3.3 2.6 5.9 5.8 5.9s5.8-2.6 5.8-5.9h2.5c0.6 0 1.2-0.1 1.7-0.4v12.1z m-14.2-11.7h8.4c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2z m14.2-3.3c0 0.9-0.7 1.7-1.7 1.7h-16.6c-1 0-1.7-0.8-1.7-1.7v-3.3c0-1 0.7-1.7 1.7-1.7h16.6c1 0 1.7 0.7 1.7 1.7v3.3z' })
                )
            );
        }
    }]);

    return TiShoppingBag;
}(React.Component);

exports.default = TiShoppingBag;
module.exports = exports['default'];