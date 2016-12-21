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

var FaGbp = function (_React$Component) {
    _inherits(FaGbp, _React$Component);

    function FaGbp() {
        _classCallCheck(this, FaGbp);

        return _possibleConstructorReturn(this, (FaGbp.__proto__ || Object.getPrototypeOf(FaGbp)).apply(this, arguments));
    }

    _createClass(FaGbp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.3 25.4v8.2q0 0.3-0.2 0.5t-0.5 0.2h-21.4q-0.3 0-0.5-0.2t-0.2-0.5v-3.4q0-0.3 0.2-0.5t0.5-0.2h2.2v-8.5h-2.1q-0.4 0-0.6-0.2t-0.2-0.6v-2.9q0-0.3 0.2-0.5t0.6-0.2h2.1v-5q0-3.8 2.7-6.3t7.1-2.4q4.1 0 7.4 2.7 0.2 0.2 0.3 0.5t-0.2 0.5l-2.3 2.8q-0.2 0.3-0.5 0.3-0.3 0.1-0.5-0.1-0.1-0.2-0.6-0.5t-1.5-0.7-2.1-0.4q-1.9 0-3.1 1.1t-1.1 2.7v4.8h6.8q0.3 0 0.5 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.5 0.3h-6.8v8.4h9.2v-4q0-0.3 0.2-0.5t0.5-0.2h3.7q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaGbp;
}(React.Component);

exports.default = FaGbp;
module.exports = exports['default'];