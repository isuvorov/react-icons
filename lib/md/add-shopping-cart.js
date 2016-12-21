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

var MdAddShoppingCart = function (_React$Component) {
    _inherits(MdAddShoppingCart, _React$Component);

    function MdAddShoppingCart() {
        _classCallCheck(this, MdAddShoppingCart);

        return _possibleConstructorReturn(this, (MdAddShoppingCart.__proto__ || Object.getPrototypeOf(MdAddShoppingCart)).apply(this, arguments));
    }

    _createClass(MdAddShoppingCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12 24.6q0 0.4 0.3 0.4h19.3v3.4h-20q-1.3 0-2.3-1.1t-0.9-2.3q0-0.8 0.4-1.6l2.2-4.1-6-12.7h-3.4v-3.2h5.5q1.6 3.2 3.1 6.6 0.4 0.7 1.8 3.7t2.2 4.7h11.7q5.9-10.7 6.4-11.8l2.9 1.7-6.4 11.6q-0.9 1.7-2.9 1.7h-12.4l-1.5 2.8z m16.4 5.4q1.3 0 2.3 1t0.9 2.4-0.9 2.3-2.3 0.9-2.4-0.9-1-2.3 1-2.4 2.4-1z m-16.8 0q1.4 0 2.4 1t1 2.4-1 2.3-2.4 0.9-2.3-0.9-0.9-2.3 0.9-2.4 2.3-1z m6.8-15v-5h-5v-3.4h5v-5h3.2v5h5v3.4h-5v5h-3.2z' })
                )
            );
        }
    }]);

    return MdAddShoppingCart;
}(React.Component);

exports.default = MdAddShoppingCart;
module.exports = exports['default'];