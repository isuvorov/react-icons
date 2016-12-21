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

var FaFileArchiveO = function (_React$Component) {
    _inherits(FaFileArchiveO, _React$Component);

    function FaFileArchiveO() {
        _classCallCheck(this, FaFileArchiveO);

        return _possibleConstructorReturn(this, (FaFileArchiveO.__proto__ || Object.getPrototypeOf(FaFileArchiveO)).apply(this, arguments));
    }

    _createClass(FaFileArchiveO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.3 8.6v-2.9h-2.9v2.9h2.9z m2.8 2.8v-2.8h-2.8v2.8h2.8z m-2.8 2.9v-2.9h-2.9v2.9h2.9z m2.8 2.8v-2.8h-2.8v2.8h2.8z m15.7-8.6q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-2.9v2.8h-2.8v-2.8h-11.4v34.2h28.5z m-14-16l2.4 7.7q0.2 0.6 0.2 1.2 0 1.9-1.6 3.1t-4.1 1.2-4.1-1.2-1.6-3.1q0-0.6 0.2-1.2 0.4-1.4 2.6-8.8v-2.9h2.9v2.9h1.7q0.5 0 0.9 0.3t0.5 0.8z m-3.1 10.3q1.2 0 2-0.4t0.8-1-0.8-1-2-0.4-2 0.4-0.9 1 0.9 1 2 0.4z' })
                )
            );
        }
    }]);

    return FaFileArchiveO;
}(React.Component);

exports.default = FaFileArchiveO;
module.exports = exports['default'];