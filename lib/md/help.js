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

var MdHelp = function (_React$Component) {
    _inherits(MdHelp, _React$Component);

    function MdHelp() {
        _classCallCheck(this, MdHelp);

        return _possibleConstructorReturn(this, (MdHelp.__proto__ || Object.getPrototypeOf(MdHelp)).apply(this, arguments));
    }

    _createClass(MdHelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.1 18.8c0.9-1 1.5-2.3 1.5-3.8 0-3.7-2.9-6.6-6.6-6.6s-6.6 2.9-6.6 6.6h3.2c0-1.8 1.6-3.4 3.4-3.4s3.4 1.6 3.4 3.4c0 0.9-0.4 1.7-1.1 2.3l-2 2.2c-1.2 1.2-1.9 2.8-1.9 4.6v0.9h3.2c0-2.5 0.8-3.4 2-4.7z m-3.5 12.8v-3.2h-3.2v3.2h3.2z m-1.6-28.2c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdHelp;
}(React.Component);

exports.default = MdHelp;
module.exports = exports['default'];