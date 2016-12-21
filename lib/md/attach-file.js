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

var MdAttachFile = function (_React$Component) {
    _inherits(MdAttachFile, _React$Component);

    function MdAttachFile() {
        _classCallCheck(this, MdAttachFile);

        return _possibleConstructorReturn(this, (MdAttachFile.__proto__ || Object.getPrototypeOf(MdAttachFile)).apply(this, arguments));
    }

    _createClass(MdAttachFile, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 10h2.5v19.1c0 5.1-4.1 9.3-9.1 9.3s-9.3-4.2-9.3-9.3v-20.7c0-3.7 3.1-6.8 6.8-6.8s6.6 3.1 6.6 6.8v17.5c0 2.2-1.9 4.1-4.1 4.1s-4.3-1.9-4.3-4.1v-15.9h2.5v15.9c0 0.9 0.8 1.6 1.8 1.6s1.6-0.7 1.6-1.6v-17.5c0-2.3-1.9-4.3-4.1-4.3s-4.3 2-4.3 4.3v20.7c0 3.7 3.1 6.8 6.8 6.8s6.6-3.1 6.6-6.8v-19.1z' })
                )
            );
        }
    }]);

    return MdAttachFile;
}(React.Component);

exports.default = MdAttachFile;
module.exports = exports['default'];