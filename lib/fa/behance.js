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

var FaBehance = function (_React$Component) {
    _inherits(FaBehance, _React$Component);

    function FaBehance() {
        _classCallCheck(this, FaBehance);

        return _possibleConstructorReturn(this, (FaBehance.__proto__ || Object.getPrototypeOf(FaBehance)).apply(this, arguments));
    }

    _createClass(FaBehance, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 9.2h-9.9v2.4h9.9v-2.4z m-4.9 8.3q-1.8 0-2.9 1t-1.2 2.7h8q-0.4-3.7-3.9-3.7z m0.3 11.3q1.2 0 2.4-0.6t1.4-1.7h4.3q-1.9 6-8.3 6-4.1 0-6.6-2.6t-2.4-6.7q0-4.1 2.5-6.7t6.5-2.7q2.7 0 4.7 1.3t3 3.5 1 4.8q0 0.3-0.1 0.9h-12.8q0 2.2 1.2 3.3t3.2 1.2z m-25.9-1h5.7q4 0 4-3.2 0-3.5-3.9-3.5h-5.8v6.7z m0-10.4h5.4q1.5 0 2.4-0.7t0.9-2.2q0-2.8-3.7-2.8h-5v5.7z m-5.4-9.9h11.5q1.7 0 3 0.3t2.5 0.9 1.7 1.9 0.7 3q0 3.5-3.4 5.1 2.2 0.6 3.4 2.2t1.1 4q0 1.4-0.5 2.6t-1.3 2.1-1.9 1.3-2.3 0.8-2.6 0.3h-11.9v-24.5z' })
                )
            );
        }
    }]);

    return FaBehance;
}(React.Component);

exports.default = FaBehance;
module.exports = exports['default'];