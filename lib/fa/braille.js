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

var FaBraille = function (_React$Component) {
    _inherits(FaBraille, _React$Component);

    function FaBraille() {
        _classCallCheck(this, FaBraille);

        return _possibleConstructorReturn(this, (FaBraille.__proto__ || Object.getPrototypeOf(FaBraille)).apply(this, arguments));
    }

    _createClass(FaBraille, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.5 25.2q-1.2 0-2.1 0.9t-0.8 2.1 0.8 2 2.1 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m9.3 0q-1.2 0-2 0.9t-0.9 2.1 0.9 2 2 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m0-9.3q-1.2 0-2 0.9t-0.9 2 0.9 2.1 2 0.8 2.1-0.8 0.8-2.1-0.8-2-2.1-0.9z m14 9.3q-1.2 0-2 0.9t-0.9 2.1 0.9 2 2 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m9.4 0q-1.3 0-2.1 0.9t-0.9 2.1 0.9 2 2.1 0.9 2-0.9 0.9-2-0.9-2.1-2-0.9z m-9.4-9.3q-1.2 0-2 0.9t-0.9 2 0.9 2.1 2 0.8 2.1-0.8 0.8-2.1-0.8-2-2.1-0.9z m9.4 0q-1.3 0-2.1 0.9t-0.9 2 0.9 2.1 2.1 0.8 2-0.8 0.9-2.1-0.9-2-2-0.9z m0-9.3q-1.3 0-2.1 0.8t-0.9 2.1 0.9 2.1 2.1 0.8 2-0.8 0.9-2.1-0.9-2.1-2-0.8z m-29.2 21.6q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m9.3 0q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m9.3 0q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m-9.3-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m23.3 18.7q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m-14-18.7q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m23.3 18.7q0 1.4-1 2.4t-2.4 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.4 1 1 2.5z m-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.4 1.1 1 2.4z m-9.4-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.5 2.5-1 2.4 1 1 2.5z' })
                )
            );
        }
    }]);

    return FaBraille;
}(React.Component);

exports.default = FaBraille;
module.exports = exports['default'];