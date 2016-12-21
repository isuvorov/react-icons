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

var TiChevronRight = function (_React$Component) {
    _inherits(TiChevronRight, _React$Component);

    function TiChevronRight() {
        _classCallCheck(this, TiChevronRight);

        return _possibleConstructorReturn(this, (TiChevronRight.__proto__ || Object.getPrototypeOf(TiChevronRight)).apply(this, arguments));
    }

    _createClass(TiChevronRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.3 9.3c-1.3 1.3-1.3 3.4 0 4.7l6 6-6 6c-1.3 1.3-1.3 3.4 0 4.7 0.7 0.6 1.5 1 2.4 1s1.7-0.4 2.3-1l10.7-10.7-10.7-10.7c-1.3-1.3-3.4-1.3-4.7 0z' })
                )
            );
        }
    }]);

    return TiChevronRight;
}(React.Component);

exports.default = TiChevronRight;
module.exports = exports['default'];