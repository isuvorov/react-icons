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

var FaMoney = function (_React$Component) {
    _inherits(FaMoney, _React$Component);

    function FaMoney() {
        _classCallCheck(this, FaMoney);

        return _possibleConstructorReturn(this, (FaMoney.__proto__ || Object.getPrototypeOf(FaMoney)).apply(this, arguments));
    }

    _createClass(FaMoney, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.9 25.3h8v-2h-2.6v-9.3h-2.4l-3.1 2.9 1.6 1.6q0.9-0.7 1.2-1.2h0v6h-2.7v2z m10.7-5.3q0 1.5-0.5 2.9t-1.2 2.8-2.1 2.1-2.9 0.8-2.8-0.8-2.1-2.1-1.3-2.8-0.4-2.9 0.4-2.9 1.3-2.8 2.1-2.1 2.8-0.8 2.9 0.8 2.1 2.1 1.2 2.8 0.5 2.9z m10.6 5.3v-10.6q-2.2 0-3.7-1.6t-1.6-3.7h-23.9q0 2.2-1.6 3.7t-3.7 1.6v10.6q2.2 0 3.7 1.6t1.6 3.7h23.9q0-2.2 1.6-3.7t3.7-1.6z m2.7-17.3v24q0 0.5-0.4 0.9t-1 0.4h-37.2q-0.5 0-0.9-0.4t-0.4-0.9v-24q0-0.5 0.4-0.9t0.9-0.4h37.2q0.6 0 1 0.4t0.4 0.9z' })
                )
            );
        }
    }]);

    return FaMoney;
}(React.Component);

exports.default = FaMoney;
module.exports = exports['default'];