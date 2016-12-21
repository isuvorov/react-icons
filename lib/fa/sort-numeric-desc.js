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

var FaSortNumericDesc = function (_React$Component) {
    _inherits(FaSortNumericDesc, _React$Component);

    function FaSortNumericDesc() {
        _classCallCheck(this, FaSortNumericDesc);

        return _possibleConstructorReturn(this, (FaSortNumericDesc.__proto__ || Object.getPrototypeOf(FaSortNumericDesc)).apply(this, arguments));
    }

    _createClass(FaSortNumericDesc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33 6.5q0-1.5-0.9-2.6t-2.3-1.2q-1.2 0-1.9 0.8t-0.7 2.1 0.8 2.1 2.4 0.9q1.1 0 1.9-0.6t0.7-1.6z m-13.6 25.6q0 0.3-0.2 0.6l-7.1 7.1q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.2-7.1q-0.3-0.4-0.1-0.8 0.1-0.5 0.6-0.5h4.3v-30.7q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v30.7h4.3q0.3 0 0.5 0.2t0.2 0.5z m16.1 5.4v2.5h-10.5v-2.5h3.8v-9.7q0-0.1 0-0.4t0-0.4v-0.3h-0.1l-0.1 0.2q-0.2 0.3-0.6 0.7l-1.4 1.3-1.8-1.9 4.3-4.1h2.7v14.6h3.7z m0.7-29.8q0 1.4-0.3 2.8t-0.9 2.5-1.6 2.1-2.2 1.5-2.8 0.5q-1.4 0-2.4-0.3-0.5-0.2-0.9-0.3l0.8-2.6q0.4 0.2 0.7 0.3 0.8 0.3 1.7 0.3 1.9 0 3-1.3t1.5-3.3h-0.1q-0.4 0.5-1.3 0.8t-1.9 0.4q-2.4 0-3.9-1.6t-1.5-3.9q0-2.3 1.6-4t4.1-1.6q2.7 0 4.5 2.1t1.9 5.6z' })
                )
            );
        }
    }]);

    return FaSortNumericDesc;
}(React.Component);

exports.default = FaSortNumericDesc;
module.exports = exports['default'];