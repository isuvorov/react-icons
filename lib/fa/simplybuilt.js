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

var FaSimplybuilt = function (_React$Component) {
    _inherits(FaSimplybuilt, _React$Component);

    function FaSimplybuilt() {
        _classCallCheck(this, FaSimplybuilt);

        return _possibleConstructorReturn(this, (FaSimplybuilt.__proto__ || Object.getPrototypeOf(FaSimplybuilt)).apply(this, arguments));
    }

    _createClass(FaSimplybuilt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.8 22.6q0-2.1-1.6-3.7t-3.7-1.5-3.7 1.5-1.6 3.7 1.6 3.7 3.7 1.6 3.7-1.6 1.6-3.7z m16.7 0q0-2.2-1.5-3.7t-3.7-1.5-3.8 1.5-1.5 3.7q0 2.2 1.5 3.7t3.8 1.6 3.7-1.6 1.5-3.7z m6.3-15.7v26.2q0 0.8-0.7 1.4t-1.4 0.7h-35.6q-0.9 0-1.5-0.7t-0.6-1.4v-26.2q0-0.8 0.6-1.4t1.5-0.7h8.4q0.8 0 1.4 0.7t0.7 1.4v3.1h14.6v-3.1q0-0.8 0.6-1.4t1.5-0.7h8.4q0.8 0 1.4 0.7t0.7 1.4z' })
                )
            );
        }
    }]);

    return FaSimplybuilt;
}(React.Component);

exports.default = FaSimplybuilt;
module.exports = exports['default'];