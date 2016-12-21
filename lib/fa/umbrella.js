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

var FaUmbrella = function (_React$Component) {
    _inherits(FaUmbrella, _React$Component);

    function FaUmbrella() {
        _classCallCheck(this, FaUmbrella);

        return _possibleConstructorReturn(this, (FaUmbrella.__proto__ || Object.getPrototypeOf(FaUmbrella)).apply(this, arguments));
    }

    _createClass(FaUmbrella, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.5 18.5v12.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4q0-0.6 0.4-1t1-0.4 1 0.4 0.4 1q0 1.1 0.9 2t2 0.9 2-0.9 0.8-2v-12.9q0.8-0.3 1.5-0.3t1.4 0.3z m17.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.2 0-0.5-0.2-1.1-1.1-2.1-1.6t-2.2-0.5q-1.6 0-2.9 0.8t-2.3 2.2q-0.1 0.2-0.4 0.6t-0.3 0.6q-0.3 0.4-0.6 0.4-0.4 0-0.7-0.4-0.1-0.2-0.3-0.6t-0.4-0.6q-1-1.3-2.3-2.2t-2.8-0.8-2.9 0.8-2.3 2.2q-0.1 0.2-0.4 0.6t-0.3 0.6q-0.2 0.3-0.6 0.3-0.4 0-0.6-0.3-0.1-0.2-0.4-0.6t-0.4-0.6q-0.9-1.3-2.3-2.2t-2.8-0.8q-1.3 0-2.3 0.5t-2.1 1.6q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2t-0.2-0.5q0-0.1 0-0.2 1-4.1 3.9-7.1t6.6-4.6 8.1-1.5q3.1 0 6.1 0.9t5.5 2.5 4.3 4.2 2.6 5.6q0 0.1 0 0.2z m-17.1-16.2v2.1q-0.9 0-1.4 0t-1.5 0v-2.1q0-0.6 0.5-1t1-0.5 1 0.5 0.4 1z' })
                )
            );
        }
    }]);

    return FaUmbrella;
}(React.Component);

exports.default = FaUmbrella;
module.exports = exports['default'];