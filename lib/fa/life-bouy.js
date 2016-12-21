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

var FaLifeBouy = function (_React$Component) {
    _inherits(FaLifeBouy, _React$Component);

    function FaLifeBouy() {
        _classCallCheck(this, FaLifeBouy);

        return _possibleConstructorReturn(this, (FaLifeBouy.__proto__ || Object.getPrototypeOf(FaLifeBouy)).apply(this, arguments));
    }

    _createClass(FaLifeBouy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m0 2.9q-4.2 0-8.1 2l4.4 4.3q1.8-0.6 3.7-0.6t3.7 0.6l4.4-4.3q-3.9-2-8.1-2z m-15.1 25.2l4.3-4.4q-0.6-1.8-0.6-3.7t0.6-3.7l-4.3-4.4q-2 3.9-2 8.1t2 8.1z m15.1 9q4.2 0 8.1-2l-4.4-4.3q-1.8 0.6-3.7 0.6t-3.7-0.6l-4.4 4.3q3.9 2 8.1 2z m0-8.5q3.6 0 6.1-2.5t2.5-6.1-2.5-6.1-6.1-2.5-6.1 2.5-2.5 6.1 2.5 6.1 6.1 2.5z m10.8-4.9l4.3 4.4q2-3.9 2-8.1t-2-8.1l-4.3 4.4q0.6 1.8 0.6 3.7t-0.6 3.7z' })
                )
            );
        }
    }]);

    return FaLifeBouy;
}(React.Component);

exports.default = FaLifeBouy;
module.exports = exports['default'];