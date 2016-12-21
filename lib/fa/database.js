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

var FaDatabase = function (_React$Component) {
    _inherits(FaDatabase, _React$Component);

    function FaDatabase() {
        _classCallCheck(this, FaDatabase);

        return _possibleConstructorReturn(this, (FaDatabase.__proto__ || Object.getPrototypeOf(FaDatabase)).apply(this, arguments));
    }

    _createClass(FaDatabase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.1 17.1q5.3 0 9.9-0.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.9v-3.8q2.7 1.9 7.3 2.9t9.8 0.9z m0 17.2q5.3 0 9.9-1t7.3-2.8v3.8q0 1.5-2.3 2.8t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.8v-3.8q2.7 1.9 7.3 2.8t9.8 1z m0-8.6q5.3 0 9.9-0.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6 0.7-8.6-0.7-6.2-2.1-2.3-2.9v-3.8q2.7 1.9 7.3 2.9t9.8 0.9z m0-25.7q4.7 0 8.6 0.8t6.3 2.1 2.3 2.8v2.9q0 1.5-2.3 2.8t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.8v-2.9q0-1.5 2.3-2.8t6.3-2.1 8.5-0.8z' })
                )
            );
        }
    }]);

    return FaDatabase;
}(React.Component);

exports.default = FaDatabase;
module.exports = exports['default'];