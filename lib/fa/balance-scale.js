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

var FaBalanceScale = function (_React$Component) {
    _inherits(FaBalanceScale, _React$Component);

    function FaBalanceScale() {
        _classCallCheck(this, FaBalanceScale);

        return _possibleConstructorReturn(this, (FaBalanceScale.__proto__ || Object.getPrototypeOf(FaBalanceScale)).apply(this, arguments));
    }

    _createClass(FaBalanceScale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.5 11.8l-7 12.9h14z m-23.3 0l-7 12.9h14z m14.9-3.5q-0.2 0.8-0.8 1.3t-1.3 0.9v23.5h11.1q0.2 0 0.4 0.2t0.2 0.4v1.1q0 0.3-0.2 0.5t-0.4 0.1h-24.5q-0.3 0-0.4-0.1t-0.2-0.5v-1.1q0-0.3 0.2-0.4t0.4-0.2h11.1v-23.5q-0.8-0.3-1.3-0.9t-0.9-1.3h-8.9q-0.3 0-0.4-0.1t-0.2-0.4v-1.2q0-0.3 0.2-0.4t0.4-0.2h8.9q0.4-1 1.3-1.7t2-0.6 2 0.6 1.3 1.7h9q0.2 0 0.4 0.2t0.2 0.4v1.2q0 0.2-0.2 0.4t-0.4 0.1h-9z m-3.3 0.3q0.6 0 1.1-0.4t0.4-1-0.4-1.1-1.1-0.4-1 0.4-0.4 1.1 0.4 1 1 0.4z m19.8 16.1q0 1.3-0.8 2.4t-2.1 1.6-2.7 0.9-2.5 0.3-2.6-0.3-2.6-0.9-2.1-1.6-0.9-2.4q0-0.2 0.7-1.5t1.6-3.2 2-3.6 1.8-3.3 1.1-1.8q0.3-0.6 1-0.6t1 0.6q0.1 0.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2 0.6 1.5z m-23.3 0q0 1.3-0.8 2.4t-2.2 1.6-2.6 0.9-2.5 0.3-2.6-0.3-2.6-0.9-2.2-1.6-0.8-2.4q0-0.2 0.6-1.5t1.7-3.2 2-3.6 1.8-3.3 1-1.8q0.4-0.6 1.1-0.6t1 0.6q0.1 0.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2 0.6 1.5z' })
                )
            );
        }
    }]);

    return FaBalanceScale;
}(React.Component);

exports.default = FaBalanceScale;
module.exports = exports['default'];