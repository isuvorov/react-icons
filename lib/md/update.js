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

var MdUpdate = function (_React$Component) {
    _inherits(MdUpdate, _React$Component);

    function MdUpdate() {
        _classCallCheck(this, MdUpdate);

        return _possibleConstructorReturn(this, (MdUpdate.__proto__ || Object.getPrototypeOf(MdUpdate)).apply(this, arguments));
    }

    _createClass(MdUpdate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.9 13.4v7l5.7 3.5-1.1 2-7.1-4.3v-8.2h2.5z m14.1 3.5h-11.3l4.6-4.7c-4.6-4.6-12-4.7-16.5-0.2s-4.5 11.7 0 16.3 11.9 4.5 16.5 0c2.2-2.3 3.3-4.9 3.3-8.1h3.4c0 3.2-1.4 7.5-4.4 10.4-5.8 5.8-15.4 5.8-21.2 0s-5.9-15.1 0-20.9 15.2-5.8 21.1 0l4.5-4.7v11.9z' })
                )
            );
        }
    }]);

    return MdUpdate;
}(React.Component);

exports.default = MdUpdate;
module.exports = exports['default'];