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

var TiSocialPinterest = function (_React$Component) {
    _inherits(TiSocialPinterest, _React$Component);

    function TiSocialPinterest() {
        _classCallCheck(this, TiSocialPinterest);

        return _possibleConstructorReturn(this, (TiSocialPinterest.__proto__ || Object.getPrototypeOf(TiSocialPinterest)).apply(this, arguments));
    }

    _createClass(TiSocialPinterest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.8 8c-7 0-10.6 5-10.6 9.2 0 2.6 1 4.8 3 5.7 0.4 0.1 0.7 0 0.8-0.4 0.1-0.2 0.2-0.9 0.3-1.2 0.1-0.3 0-0.5-0.2-0.8-0.6-0.7-1-1.6-1-2.9 0-3.8 2.8-7.1 7.3-7.1 4 0 6.2 2.4 6.2 5.7 0 4.3-1.9 7.9-4.7 7.9-1.6 0-2.7-1.3-2.4-2.9 0.5-1.9 1.3-3.9 1.3-5.3 0-1.2-0.6-2.2-2-2.2-1.5 0-2.8 1.6-2.8 3.8 0 1.5 0.5 2.4 0.5 2.4s-1.7 6.9-2 8.1c-0.5 2.4 0 5.3 0 5.6 0 0.2 0.3 0.2 0.4 0.1 0.1-0.2 2-2.5 2.6-4.8 0.2-0.7 1.1-4.1 1.1-4.1 0.5 1 2 1.8 3.6 1.8 4.8 0 8-4.3 8-10.1 0-4.4-3.7-8.5-9.4-8.5z' })
                )
            );
        }
    }]);

    return TiSocialPinterest;
}(React.Component);

exports.default = TiSocialPinterest;
module.exports = exports['default'];