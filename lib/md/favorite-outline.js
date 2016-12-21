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

var MdFavoriteOutline = function (_React$Component) {
    _inherits(MdFavoriteOutline, _React$Component);

    function MdFavoriteOutline() {
        _classCallCheck(this, MdFavoriteOutline);

        return _possibleConstructorReturn(this, (MdFavoriteOutline.__proto__ || Object.getPrototypeOf(MdFavoriteOutline)).apply(this, arguments));
    }

    _createClass(MdFavoriteOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 30.9q3.7-3.3 5.5-5t3.9-4.1 2.9-4.1 0.9-3.6q0-2.5-1.7-4.1t-4.2-1.6q-2 0-3.6 1.1t-2.3 2.8h-3.2q-0.6-1.7-2.3-2.8t-3.6-1.1q-2.5 0-4.2 1.6t-1.7 4.1q0 1.8 0.9 3.6t2.9 4.1 3.9 4.1 5.5 5l0.2 0.2z m7.3-25.9q3.9 0 6.5 2.7t2.6 6.4q0 2.3-0.8 4.5t-3.2 4.8-4.2 4.4-6 5.6l-2.4 2.1-2.4-2.1q-5.4-4.8-7.8-7.2t-4.4-5.7-2-6.4q0-3.8 2.6-6.4t6.5-2.7q4.5 0 7.5 3.5 3-3.5 7.5-3.5z' })
                )
            );
        }
    }]);

    return MdFavoriteOutline;
}(React.Component);

exports.default = MdFavoriteOutline;
module.exports = exports['default'];